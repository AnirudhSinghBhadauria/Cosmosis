import React from "react";
import { Link } from "react-router-dom";
import classes from "./styles/notFound.module.scss";
const NotFound = () => {
  return (
    <section className={classes.notFoundContainer}>
      <div className={classes.notFound}>
        <h1>COSMOSIS | NOT FOUND</h1>
        <img
          fetchpriority="high"
          src="https://firebasestorage.googleapis.com/v0/b/cosmosis-ff4d9.appspot.com/o/notFound.webp?alt=media&token=ab1958cc-26d1-4c82-86be-47e68ddeef90"
          alt="NotFound"
        />
        <div>
          <h2>
            THE PAGE YOU WERE LOOKING FOR CAN'NT BE FOUND.
            <br />
            YOU CAN HEAD BACK TO THE
            <Link to="/" preventScrollReset={false}>
              HOME
            </Link>
            PAGE.
          </h2>
        </div>
        <br />
      </div>
    </section>
  );
};

export default memo(NotFound);
