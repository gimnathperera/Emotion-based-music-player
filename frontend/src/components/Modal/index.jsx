import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const ModalComponent = ({
  isOpen,
  modalContent,
  handleClose,
  showCloseIcon,
}) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      center
      showCloseIcon={showCloseIcon}
    >
      {modalContent}
    </Modal>
  );
};

export default ModalComponent;
