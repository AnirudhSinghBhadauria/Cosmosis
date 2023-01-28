import React, { Fragment } from "react";
import { redPlanet } from "../assets/Links";
import FaceComponent from "../components/FaceComponent";
import FeatureComponent from "../components/FeatureComponent";
import classes from "./styles/curosity.module.scss";

const Curosity = () => {
  return (
    <Fragment>
      <FaceComponent
        number="C.XI S.XXI"
        heading="BLUES FOR A RED PLANET"
        quote="In the Archads of the gods, he watches the canals. . ."
        author="- EMUNA ELISH"
      >
        <div className={classes.redPlanet}></div>
      </FaceComponent>

      <FeatureComponent
        paraOne="Curiosity is a car-sized Mars rover designed to explore the Gale crater on Mars as part of NASA's Mars Science Laboratory mission."
        paraTwo="NASA's Curiosity rover is currently roaming Mars' landscape cliking pictures and looking for signs of life and learning about the Red Planet's unique environment."
        paraThree="This section features Pictures that Curosity captured today. (If Any)"
        feature="CUROSITY"
        path="/curosity"
      />

    </Fragment>
  );
};

export default Curosity;
