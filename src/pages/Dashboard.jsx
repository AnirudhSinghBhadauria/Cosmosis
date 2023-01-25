import React, { Fragment } from "react";
import { heavenAndHell } from "../assets/Links";
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
          <p>VOID</p>
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

      <FeatureComponent
        paraOne="Astronomy Picture of the Day. The pictures and descriptions often
          relate to current events in astronomy and space exploration."
        paraTwo="Each day a different image or photograph of our fascinating universe
          is featured, along with a brief explanation written by a professional
          astronomer."
        feature="APOD"
        path="/apod"
      />

      <FeatureComponent
        paraOne="Each day a different image or photograph of our fascinating universe
        is featured in APOD,"
        paraTwo=" In this section, Any APOD of any particular date can be found out along with a  brief explanation written by a professional astronomer."
        feature="K-POD"
        path="/k-pod"
      />

      <FeatureComponent
        paraOne="Curiosity is a car-sized Mars rover designed to explore the Gale crater on Mars as part of NASA's Mars Science Laboratory mission."
        paraTwo="NASA's Curiosity rover is currently roaming Mars' landscape cliking pictures and looking for signs of life and learning about the Red Planet's unique environment."
        paraThree='This section features Pictures that Curosity captured today. (If Any)'
        feature="CUROSITY"
        path="/curosity"
      />

      <FeatureComponent
        paraOne="The Indian Space Research Organisation is the national space agency of India, headquartered in Bengaluru."
        paraTwo="ISRO is the research and development wing of DOS and is responsible for the execution of the national space programme."
        paraThree='This Section enlightens Struggles and Sucess of this prestigious organisation.'
        feature="ISRO"
        path="/isro"
      />

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
