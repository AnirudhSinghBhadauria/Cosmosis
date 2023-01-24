import classes from "./styles/featureComponent.module.scss";
import ApodSVG from "../assets/SVG-Components/ApodSVG";
import { Link } from "react-router-dom";
import React from "react";
import { linkImage } from "../assets/Links";

const FeatureComponent = () => {
  return (
    <section className={classes.feature}>
      <div>
        <h1>APOD</h1>
        <img
          src={"https://img.icons8.com/material-rounded/24/ffffff/link--v1.png"}
          alt="image of a link"
        />
      </div>
      <p>
        Astronomy Picture of the Day. The pictures and descriptions often relate
        to current events in astronomy and space exploration.
      </p>
      <p>
        Each day a different image or photograph of our fascinating universe is
        featured, along with a brief explanation written by a professional
        astronomer.
      </p>
      <Link className={classes.link} to="/apod">
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
    </section>
  );
};

export default FeatureComponent;
