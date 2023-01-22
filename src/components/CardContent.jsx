import React from "react";
import classes from "./styles/cardContent.module.scss";

const CardContent = (props) => {
  return (
    <section
      className={classes.cardContent}
      style={{ color: ` ${props.color}` }}
    >
      <span className={classes.headingContainer}>
        <h1>{props.heading}</h1>
        <img
          className={classes.link}
          alt='link'
          src="https://img.icons8.com/material-rounded/15/null/link--v1.png"
        />
      </span>
      <p>{props.desc}</p>
    </section>
  );
};

export default CardContent;
