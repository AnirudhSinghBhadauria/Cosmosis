import { Fragment, memo } from "react";
import { createPortal } from "react-dom";
import ModalMaker from "./ModalMaker";

const ErrorModal = (props) => {
  return (
    <Fragment>
      {createPortal(
        <ModalMaker
          className={props.className}
          onClick={props.onClick}
          heading={props.heading}
          message={props.message}
        />,
        document.querySelector("#error-modal")
      )}
    </Fragment>
  );
};

export default memo(ErrorModal);
