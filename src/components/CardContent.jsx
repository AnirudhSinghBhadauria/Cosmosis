import React, { memo } from "react";
import classes from "./styles/cardContent.module.scss";
import { linkImage } from "../assets/Links";

const CardContent = (props) => {
  return (
    <section
      className={classes.cardContent}
      style={{ color: ` ${props.color}` }}
    >
      <span className={classes.headingContainer}>
        <h1>{props.heading}</h1>
        <img className={classes.link} alt="link-image" src={linkImage} />
      </span>
      <p>{props.desc}</p>
    </section>
  );
};

export default memo(CardContent);
