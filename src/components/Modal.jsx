import React from "react";
import { createPortal } from "react-dom";
import classes from "./styles/modal.module.scss";

const Modal = () => {
  const modalCloseHandeler = () => {};

  return (
    <div className={classes.modalWrapper}>
      <p>{props.message}</p>
      <button onClick={modalCloseHandeler}>Close</button>
    </div>
  );
};

createPortal(
  <Modal
    message={props.message}
    modalCloseHandeler={props.modalCloseHandeler}
  />,
  document.querySelector("#error-modal")
);

export default Modal;
