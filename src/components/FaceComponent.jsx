import React, { memo } from "react";
import classes from "./styles/faceComponent.module.scss";

const FaceComponent = (props) => {
  return (
    <section className={`${classes.faceContainer} ${props.className}`}>
      <section>
        <p>{props.number}</p>
        <h1>{props.heading}</h1>
      </section>

      <section>
        <div className={classes.quoteContainer}>
          <p>o o</p>
          <aside>
            <p>{props.quote}</p>
            <br />
            <p>{props.author}</p>
          </aside>
          <p>o o</p>
        </div>

        <div>{props.children}</div>
      </section>
    </section>
  );
};

export default memo(FaceComponent);
