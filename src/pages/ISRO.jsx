import React, { Fragment } from "react";
import { earthTop, isroCycle1, isroCycle2 } from "../assets/Links";
import classes from "./styles/isro.module.scss";
import { HomiBhabha, VikramSarabhai } from "../assets/data";
import ScientistSection from "../components/ScientistSection";
import IsroSVG from "../assets/SVG-Components/IsroSVG";

const ISRO = () => {
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
            src="https://firebasestorage.googleapis.com/v0/b/cosmosis-ff4d9.appspot.com/o/astronaut%20floating.webp?alt=media&token=6e1680ab-48fc-4f4c-94cb-016560b7685c"
            alt="floating Astronaut"
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
          <img src={earthTop} alt="earth" />
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
        image={HomiBhabha.image}
        quote={HomiBhabha.quote}
        year={HomiBhabha.year}
        name={HomiBhabha.name}
        paraOne={HomiBhabha.paraOne}
        paraTwo={HomiBhabha.paraTwo}
        paraThree={HomiBhabha.paraThree}
        paraFour={HomiBhabha.paraFour}
      />

      <section className={classes.firstPhotoSection}>
        <p>
          In 1963 Indian Space Research Organization (ISRO) launched its first
          rocket from Thumba Equatorial Launching Station,the rocket was
          transported to lift-off pad ON A BICYCLE.
        </p>
        <img src={isroCycle1} alt="isro cycle one" />
      </section>

      <ScientistSection
        image={VikramSarabhai.image}
        quote={VikramSarabhai.quote}
        year={VikramSarabhai.year}
        name={VikramSarabhai.name}
        paraOne={VikramSarabhai.paraOne}
        paraTwo={VikramSarabhai.paraTwo}
        paraThree={VikramSarabhai.paraThree}
        paraFour={VikramSarabhai.paraFour}
      />

      <section className={classes.secondPhotoSection}>
        <img src={isroCycle2} alt="Second Photo Section" />
        <p>
          The first rocket was so light and small that it was transported on a
          bicycle to the Thumba Launching Station in Thiruvananthapuram, Kerala.
        </p>
      </section>
    </Fragment>
  );
};

export default ISRO;
