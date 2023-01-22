import React, { Fragment } from "react";
import { profilePlaceHolderImage } from "../assets/Links";
import HeroPhotoSection from "../components/HeroPhotoSection";
import classes from "./styles/dashboard.module.scss";

const Dashboard = () => {
  return (
    <Fragment>
      <section className={classes.forefrount}>
        <div className={classes.headingSection}>
          <p>CARL SAGAN</p>
          <h1>COSMOSIS</h1>
        </div>

        <div className={classes.dotContainer}>
          <h1>...</h1>
          <h1>..</h1>
        </div>

        <div className={classes.imageWrapper}>
          <section className={classes.singleDotContainer}>
            <h1>...</h1>
          </section>
          <section className={classes.imageContainer}>
            <HeroPhotoSection />
          </section>
        </div>
      </section>
    </Fragment>
  );
};

export default Dashboard;
