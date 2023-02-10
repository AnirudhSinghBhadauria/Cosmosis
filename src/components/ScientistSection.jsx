import React, { Fragment } from "react";
import classes from "./styles/ScientistSection.module.scss";

const ScientistSection = (props) => {
  return (
    <Fragment>
      <section className={classes.scientistContainer}>
        <div>
          <img loading="eager" fetchpriority='high' src={props.image} />
        </div>
        <div>
            <p>{props.quote}</p>
        </div>
      </section>

      <section className={classes.about}>
        <div>
          <h1>{props.name}</h1>
          <h1>{props.year}</h1>
        </div>
        <div>
          <p>{props.paraOne}</p>
          <p>{props.paraTwo}</p>
          <p>{props.paraThree}</p>
          <p>{props.paraFour}</p>
        </div>
      </section>
    </Fragment>
  );
};

export default ScientistSection;
