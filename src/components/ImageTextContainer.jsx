import classes from "./styles/imageTextContainer.module.scss";
import React from "react";
import Loader from "./Loader";

const ImageTextContainer = (props) => {
  return (
    <section className={classes.apodContainer}>
      <div style={props.customStyles} className={classes.picture}>
        {props.ifLoading ? (
          <div className={classes.loaderContainer}>
            <Loader />
          </div>
        ) : (
          props.children
        )}
      </div>
      <div className={`${classes.textContent} ${props.className}`}>
        {props.ifLoading ? (
          <div className={classes.loaderContainer}>
            <Loader />
          </div>
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
