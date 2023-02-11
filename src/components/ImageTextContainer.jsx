import classes from "./styles/imageTextContainer.module.scss";
import React, { memo } from "react";
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
        <div>
          <h1 className={props.ifLoading ? classes.skeletonLoader : ""}>
            {props.title}
          </h1>
          <p className={props.ifLoading ? classes.skeletonLoader : ""}>
            {props.explanation}
          </p>
        </div>
      </div>
    </section>
  );
}

export default memo(ImageTextContainer);
