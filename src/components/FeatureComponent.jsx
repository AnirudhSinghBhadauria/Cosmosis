import classes from "./styles/featureComponent.module.scss";
import { Link } from "react-router-dom";
import React from "react";

const FeatureComponent = (props) => {
  return (
    <section className={classes.feature}>
      <div>
        <p>{props.paraOne}</p>
        <p>{props.paraTwo}</p>
        {props.paraThree && <p>{props.paraThree}</p>}

        <Link className={classes.link} to={props.path}>
          TAKE ME TO THAT
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="135"
            height="13"
            viewBox="0 0 135 13"
            fill="none"
          >
            <line y1="7" x2="133.015" y2="7" stroke="white" stroke-width="2" />
            <line
              x1="127.06"
              y1="1.93867"
              x2="133.068"
              y2="7.93867"
              stroke="white"
              stroke-width="3"
            />
            <line
              x1="126.94"
              y1="11.939"
              x2="132.948"
              y2="5.93868"
              stroke="white"
              stroke-width="3"
            />
          </svg>
        </Link>
      </div>
      <div>
        <h1>{props.feature}</h1>
      </div>
    </section>
  );
};

export default FeatureComponent;
