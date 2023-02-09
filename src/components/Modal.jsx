import { Fragment } from "react";
import { createPortal } from "react-dom";
import ModalMaker from "./ModalMaker";

const ErrorModal = (props) => {
  return (
    <Fragment>
      {createPortal(
        <ModalMaker onClick={props.onClick} message={props.message} />,
        document.querySelector("#error-modal")
      )}
    </Fragment>
  );
};

export default ErrorModal;
