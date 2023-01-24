import React, { Fragment } from "react";
import { heavenAndHell, profilePlaceHolderImage } from "../assets/Links";
import HeroPhotoSection from "../components/HeroPhotoSection";
import classes from "./styles/dashboard.module.scss";
import Sidestrands from "../assets/SVG-Components/Sidestrands";
import FaceComponent from "../components/FaceComponent";
import FeatureComponent from "../components/FeatureComponent";

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

      <section className={classes.sectionTwo}>
        <div className={classes.textContainer}>
          <section>
            <p>C.III S.IX</p>
            <h1>
              ONE <br /> VOICE <br /> IN THE <br /> COSMIC <br /> FUGUE
            </h1>
          </section>

          <section>
            <p>o o</p>
            <div>
              <p>
                Man is bound by his own action except when it is performed for
                the sake of sacrifice.
              </p>
              <br />
              <p>- BHAGAVAD GITA</p>
            </div>
            <p>o o</p>
          </section>
        </div>

        <div className={classes.strandContainer}>
          <Sidestrands />
        </div>
      </section>

      <FeatureComponent />

      <FaceComponent
        number="C.XXI S.XXXII"
        heading="HEAVEN AND HELL"
        quote="I am Death, dystroyer of Worlds."
        author="- LORD KRISHNA"
      >
        <img src={heavenAndHell} alt="heaven and hell" />
      </FaceComponent>
    </Fragment>
  );
};

export default Dashboard;
