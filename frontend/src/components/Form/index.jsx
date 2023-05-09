import { useState } from "react";
import Loading from "../Loading";
import FileUpload from "../FileUpload";
import ModalComponent from "../Modal";
import MusicScreen from "../MusicScreen";
import LiveWebCam from "../LiveWebCam";
import axios from "axios";
import { BASE_URL } from "../../constants";

const FormComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleFileUpload = async (file, _preview) => {
  setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    const result = await axios.post('http://192.168.8.162:80/api/predict', formData);
    setPrediction(result?.data);
    setIsLoading(false);
    setPreview(_preview);
    setIsOpen(true);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div class="flex flex-wrap -mx-4  items-center justify-center">
          <div
            class="w-full px-4 flex  items-center justify-center bg-no-repeat bg-center bg-fixed"
            // style={{
            //   backgroundImage: `url(${logo})`,
            // }}
          >
            <div class="hero-content flex-col flex">
              <h1
                class="
                  text-dark
                  font-bold
                  text-4xl
                  sm:text-[42px]
                  lg:text-[40px]
                  xl:text-[42px]
                  leading-snug
                  mb-3
                "
              >
                Analyze your face
              </h1>
              <p class="text-base mb-8 text-body-color max-w-[480px]">
                Please upload an image of the face
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <FileUpload onUpload={handleFileUpload} />
            <LiveWebCam />
          </div>

          <ModalComponent
            isOpen={isOpen}
            modalContent={
              <MusicScreen prediction={prediction} preview={preview?.preview} />
            }
            handleClose={handleModalClose}
            showCloseIcon={false}
          />
        </div>
      )}
    </>
  );
};

export default FormComponent;
