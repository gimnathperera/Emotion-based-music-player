from tensorflow import keras
from flask import Flask, request, jsonify
import os
import json
from flask_cors import CORS

from keras.models import load_model 
from PIL import Image, ImageOps  
import numpy as np


# Disable scientific notation for clarity
np.set_printoptions(suppress=True)

# Load the models
emotion_modal = load_model("emotion_modal.h5", compile=False)
mask_modal = load_model("face_mask_modal.h5", compile=False)

# Load the labels
emotion_class_names = open("emotion_labels.txt", "r").readlines()
mask_class_names = open("face_mask_labels.txt", "r").readlines()

APP_ROOT = os.path.abspath(os.path.dirname(__file__))


def detect_face_mask(image_path):

    # Create the array of the right shape to feed into the keras model
    # The 'length' or number of images you can put into the array is
    # determined by the first position in the shape tuple, in this case 1
    data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)

    # Load and preprocess the image
    image = Image.open(image_path).convert("RGB")
    size = (224, 224)
    image = ImageOps.fit(image, size, Image.Resampling.LANCZOS)
    image_array = np.asarray(image)
    normalized_image_array = (image_array.astype(np.float32) / 127.5) - 1
    data[0] = normalized_image_array

    # Predicts the model
    prediction = mask_modal.predict(data)
    index = np.argmax(prediction)
    mask_status = mask_class_names[index].strip()
    accuracy = prediction[0][index]

    # Return the predicted class name and confidence score
    return mask_status, accuracy


def predict_image(image_path):


    # Create the array of the right shape to feed into the keras model
    # The 'length' or number of images you can put into the array is
    # determined by the first position in the shape tuple, in this case 1
    data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)

    # Load and preprocess the image
    image = Image.open(image_path).convert("RGB")
    size = (224, 224)
    image = ImageOps.fit(image, size, Image.Resampling.LANCZOS)
    image_array = np.asarray(image)
    normalized_image_array = (image_array.astype(np.float32) / 127.5) - 1
    data[0] = normalized_image_array

    # Predicts the model
    prediction = emotion_modal.predict(data)
    index = np.argmax(prediction)
    class_name = emotion_class_names[index].strip()
    confidence_score = prediction[0][index]

    # Return the predicted class name and confidence score
    return class_name, confidence_score

# Init app
app = Flask(__name__)
CORS(app)

# Image prediction endpoint
@app.route('/api/predict', methods=['POST'])
def get_disease_prediction():
    target = os.path.join(APP_ROOT, 'images/')

    if not os.path.isdir(target):
        os.mkdir(target)

    file = request.files.get('file')
    filename = file.filename
    destination = '/'.join([target, filename])

    file.save(destination)
    mask_status, accuracy = detect_face_mask(f"./images/{filename}")
    class_name, confidence_score = predict_image(f"./images/{filename}")

    data = {'className':class_name, 
    'confidenceScore':str(confidence_score),
    'maskStatus': mask_status,
    'accuracy': str(accuracy)
    }

    return jsonify(data)



# Run Server
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=80, debug=False)