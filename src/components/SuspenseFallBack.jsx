import React, { Fragment, memo } from "react";
import classes from "./styles/suspense.module.scss";

const SuspenseFallBack = () => {
  return (
    <section className={classes.container}>
      <div className={classes.wrapper}>
        <svg
          width="37.8"
          height="30"
          viewBox="0 0 53 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M51.75 1V41H41.1824L26.5887 23.9741L11.995 41H1.42742V1L11.995 1L26.5887 18.026L41.1824 1L51.75 1ZM29.1379 21L38.8468 32.327V9.67297L29.1379 21ZM42.7177 36.4839H42.4098L42.9628 37.129H47.879V4.87097H42.9628L42.4098 5.51613H42.7177V36.4839ZM10.7676 5.51613L10.2146 4.87097L5.29839 4.87097V37.129H10.2146L10.7676 36.4839H10.4597V5.51613H10.7676ZM14.3306 9.67297V32.327L24.0395 21L14.3306 9.67297Z"
            fill="#d1d1d131"
            stroke="#d1d1d131"
          />
        </svg>
        <h1>COSMOSIS</h1>
      </div>

      <svg
        width="15"
        height="15"
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#d1d1d131"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)" strokeWidth="2">
            <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
    </section>
  );
};

export default memo(SuspenseFallBack);
