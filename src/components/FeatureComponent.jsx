import classes from "./styles/featureComponent.module.scss";
import { Link } from "react-router-dom";
import React, { memo, useContext } from "react";
import { authContext } from "../store/AuthContextProvider";

const FeatureComponent = (props) => {
  let link;

  const { featLoad } = useContext(authContext);

  if (props.ifLink === "true") {
    link = (
      <Link className={classes.link} to={props.path}>
        TAKE ME TO THAT
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="105"
          height="10"
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
    <section className={classes.feature}>
      <div>
        {featLoad ? (
          <div className="text-loading"></div>
        ) : (
          <p>{props.paraOne}</p>
        )}
        {featLoad ? (
          <div className="text-loading"></div>
        ) : (
          <p>{props.paraTwo}</p>
        )}
        {props.paraThree && <p>{props.paraThree}</p>}

        {link}
      </div>
      <div className={featLoad ? "heading-loading" : ""}>
        <h1>{props.feature}</h1>
      </div>
    </section>
  );
};

export default memo(FeatureComponent);
