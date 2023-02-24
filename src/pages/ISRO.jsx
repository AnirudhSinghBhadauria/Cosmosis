import React, { Fragment, memo, useContext } from "react";
import classes from "./styles/isro.module.scss";
import {astro} from '../assets/Links'
import ScientistSection from "../components/ScientistSection";

import { earthTop, isroCycle1, isroCycle2 } from "../assets/Links";
import { authContext } from "../store/AuthContextProvider";

const ISRO = () => {
  const { isro } = useContext(authContext);

  return (
    <Fragment>
      <section className={classes.main}>
        <div className={classes.container}>
          <section className={classes.textContainer}>
            <p>ISRO</p>
            <p>ISRO</p>
            <p>ISRO</p>
            <p>ISRO</p>
          </section>
          <img
            fetchpriority="high"
            loading="eager"
            decoding="async"
            src={astro}
            alt='astronaut'
          />
        </div>
        <aside>
          <section>
            <p>IN SERVICE OF MANKIND.</p>
            <h1>SPACE TECHNOLOGY</h1>
          </section>
          <div></div>
        </aside>
      </section>

      <section className={classes.earthSection}>
        <div>
          <h1>
            ISRO: <br /> A REACH FOR STARS.
          </h1>
          <p>
            ISRO is India's primary agency for performing tasks related to space
            exploration. technologies
          </p>
        </div>
        <div>
          <img
            fetchpriority="high"
            loading="eager"
            src={earthTop}
            alt="earth"
          />
        </div>
        <div>
          <p>
            The Indian National Committee for Space Research (INCOSPAR) was
            established by Jawaharlal Nehru.
          </p>
          <p>
            Vikram Sarabhai was the founder of ISRO. ISRO was formed on August
            15, 1969.
          </p>
        </div>
      </section>

      <ScientistSection
        image={isro[0]?.image}
        quote={isro[0]?.quote}
        year={isro[0]?.year}
        name={isro[0]?.name}
        paraOne={isro[0]?.paraOne}
        paraTwo={isro[0]?.paraTwo}
        paraThree={isro[0]?.paraThree}
        paraFour={isro[0]?.paraFour}
      />

      <section className={classes.firstPhotoSection}>
        <p>
          In 1963 Indian Space Research Organization (ISRO) launched its first
          rocket from Thumba Equatorial Launching Station,the rocket was
          transported to lift-off pad ON A BICYCLE.
        </p>
        <img
          alt="first-Photo-Section"
          fetchpriority="high"
          loading="eager"
          src={isroCycle1}
        />
      </section>

      <ScientistSection
        image={isro[1]?.image}
        quote={isro[1]?.quote}
        year={isro[1]?.year}
        name={isro[1]?.name}
        paraOne={isro[1]?.paraOne}
        paraTwo={isro[1]?.paraTwo}
        paraThree={isro[1]?.paraThree}
        paraFour={isro[1]?.paraFour}
      />

      <section className={classes.secondPhotoSection}>
        <img
          src={isroCycle2}
          alt="second-Photo-Section"
          fetchpriority="high"
          loading="eager"
        />
        <p>
          The first rocket was so light and small that it was transported on a
          bicycle to the Thumba Launching Station in Thiruvananthapuram, Kerala.
        </p>
      </section>
    </Fragment>
  );
};

export default memo(ISRO);
