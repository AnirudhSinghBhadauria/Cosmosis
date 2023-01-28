import classes from "./styles/imageTextContainer.module.scss";
import React from "react";

const ImageTextContainer = (props) => {
  return (
    <section className={classes.apodContainer}>
      <div style={props.customStyles} className={classes.picture}>
        {props.ifLoading ? "...loading" : props.children}
      </div>
      <div className={classes.textContent}>
        {props.ifLoading ? (
          "...loading"
        ) : (
          <div>
            <h1>{props.title}</h1>
            <p>{props.explanation}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageTextContainer;
