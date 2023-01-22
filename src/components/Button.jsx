import React from "react";
import classes from './styles/button.module.scss'

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={
        props.className
          ? `${props.className} ${classes.button}`
          : `${classes.button}`
      }
    >
      {props.children}
    </button>
  );
};

export default Button;
