import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return function reset() {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handelBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <div className="Modal__backdrop" onClick={handelBackdropClick}>
      <div className="Modal__content">{children}</div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
