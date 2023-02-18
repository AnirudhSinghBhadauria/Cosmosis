import React, { Fragment, useContext, useEffect, useState } from "react";
import { heavenAndHell } from "../assets/Links";
import HeroPhotoSection from "../components/HeroPhotoSection";
import classes from "./styles/dashboard.module.scss";
import Sidestrands from "../assets/SVG-Components/Sidestrands";
import FaceComponent from "../components/FaceComponent";
import FeatureComponent from "../components/FeatureComponent";
import { authContext } from "../store/AuthContextProvider";

const Dashboard = () => {
  const { feature } = useContext(authContext);

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

      {feature &&
        feature.map(
          ({ paraOne, paraTwo, paraThree, path, feature, ifLink, key }) => {
            return (
              <FeatureComponent
                paraOne={paraOne}
                paraTwo={paraTwo}
                paraThree={paraThree}
                path={path}
                feature={feature}
                ifLink={ifLink}
                key={key}
              />
            );
          }
        )}

      <FaceComponent
        number="C.XXI S.XXXII"
        heading="HEAVEN AND HELL"
        quote="I am Death, dystroyer of Worlds."
        author="- LORD KRISHNA"
        className={classes.borderRadius}
      >
        <img
          src={heavenAndHell}
          alt="heaven and hell"
          fetchpriority="high"
          loading="eager"
        />
      </FaceComponent>
    </Fragment>
  );
};

export default Dashboard;
