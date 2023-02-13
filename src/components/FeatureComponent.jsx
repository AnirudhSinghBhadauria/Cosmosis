import classes from "./styles/featureComponent.module.scss";
import { Link } from "react-router-dom";
import React, {memo} from "react";

const FeatureComponent = (props) => {
  let link;

  if (props.ifLink === "true") {
    link = (
      <Link aria-lable='navigation' disabled={'true'} className={classes.link} to={props.path}>
        TAKE ME TO THAT
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="135"
          height="13"
          viewBox="0 0 135 13"
          fill="none"
        >
          <line y1="7" x2="133.015" y2="7" stroke="white" strokeWidth="2" />
          <line
            x1="127.06"
            y1="1.93867"
            x2="133.068"
            y2="7.93867"
            stroke="white"
            strokeWidth="3"
          />
          <line
            x1="126.94"
            y1="11.939"
            x2="132.948"
            y2="5.93868"
            stroke="white"
            strokeWidth="3"
          />
        </svg>
      </Link>
    );
  } else {
    link = "";
  }


  return (
    <section  className={classes.feature}>
      <div>
        <p>{props.paraOne}</p>
        <p>{props.paraTwo}</p>
        {props.paraThree && <p>{props.paraThree}</p>}

        {link}
      </div>
      <div>
        <h1>{props.feature}</h1>
      </div>
    </section>
  );
};

export default memo(FeatureComponent);
