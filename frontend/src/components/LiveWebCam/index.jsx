import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import Modal from "react-responsive-modal";
import axios from "axios";
import { BASE_URL } from "../../constants";
import ModalComponent from "../Modal";
import MusicScreen from "../MusicScreen";

const CaptureImage = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleStartCamera = () => {
    setImgSrc(null);
    setCameraActive(true);
    setModalOpen(true);
  };

  const handleStopCamera = () => {
    setCameraActive(false);
    setModalOpen(false);
    setImgSrc(null);
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    setCameraActive(false);
  };

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  const handleSendImage = async () => {
    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("file", dataURItoBlob(imgSrc), "image.jpg");

      const result = await axios.post(`${BASE_URL}/api/predict`, formData);
      setPrediction(result?.data);
      setIsLoading(false);
      setModalOpen(false);
      setIsOpen(true);
    } catch (error) {
      setIsLoading(false);

      console.error(error); // handle error here
    }
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="p-4 border-dashed border-2 border-black rounded-md cursor-pointer"
        onClick={handleStartCamera}
      >
        Open Camera
      </div>
      <Modal open={modalOpen} onClose={handleStopCamera}>
        <div className="flex flex-col items-center justify-center">
          {cameraActive ? (
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              height={480}
            />
          ) : (
            <p>Camera is not active</p>
          )}
          {imgSrc && (
            <div>
              <img src={imgSrc} alt="captured" />
            </div>
          )}
          <div>
            {!cameraActive ? (
              <button
                class="mr-2 bg-[#cf6a6a] text-green-100 block py-2 px-8 rounded-full mt-4"
                onClick={handleStartCamera}
              >
                Start Camera
              </button>
            ) : (
              <button
                class="mr-2 bg-[#cf6a6a] text-green-100 block py-2 px-8 rounded-full mt-4"
                onClick={capture}
              >
                Take Picture
              </button>
            )}
          </div>
          {imgSrc && (
            <div>
              <button
                class="mr-2 bg-[#cf6a6a] text-green-100 block py-2 px-8 rounded-full mt-4"
                onClick={handleSendImage}
              >
                Send Image
              </button>
            </div>
          )}
        </div>
      </Modal>

      <ModalComponent
        isOpen={isOpen}
        modalContent={<MusicScreen prediction={prediction} preview={imgSrc} />}
        handleClose={handleModalClose}
        showCloseIcon={false}
      />
    </>
  );
};

export default CaptureImage;
