import React from "react";
import classes from "./styles/modal.module.scss";

const ModalMaker = (props) => {
  return (
    <div className={`${classes.modalWrapper} ${props.className}`}>
      <section>
        <div>
          <h1>{props.heading}</h1>
          <p>{props.message}</p>
        </div>
        <button className={classes.button} onClick={props.onClick}>
          Close
        </button>
      </section>
    </div>
  );
};

export default ModalMaker;
