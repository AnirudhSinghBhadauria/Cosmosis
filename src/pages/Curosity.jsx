import React, { Fragment, useEffect, useState, memo } from "react";
import { today } from "../assets/data";
import FaceComponent from "../components/FaceComponent";
import FeatureComponent from "../components/FeatureComponent";
import classes from "./styles/curosity.module.scss";
import ImageTextContainer from "../components/ImageTextContainer";
import useHttps from "../hooks/useHttps";
import { explanation } from "../assets/data";

const Curosity = () => {
  const [date, setDate] = useState("2023-01-19");
  const { sendRequest, requstLoading } = useHttps();
  const [curosityStyles, setCurosityStyles] = useState({});

  const dateChangeHandeler = (event) => setDate(event.target.value);

  useEffect(() => {
    const config = {
      url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${
        import.meta.env.VITE_REACT_NASA_KEY
      }`,
    };

    const useCurosityData = (data) => {
      setCurosityStyles({
        background: `url(${data.photos[0].img_src}) center/cover`,
      });
    };

    sendRequest(config, useCurosityData);
  }, [sendRequest, date]);

  return (
    <Fragment>
      <FaceComponent
        number="C.XI S.XXI"
        heading="BLUES FOR A RED PLANET"
        quote="The first human beings to land on Mars should not come back to Earth. They should be the beginning of a build-up of a colony/settlement, I call it a ‘permanence’."
        author="- Buzz Aldrin"
        className={classes.borderRadius}
      >
        <div className={classes.redPlanet}></div>
      </FaceComponent>

      <FeatureComponent
        paraOne="Curiosity is a car-sized Mars rover designed to explore the Gale crater on Mars   
                  as part of NASA's Mars Science Laboratory mission."
        paraTwo="NASA's Curiosity rover is currently roaming Mars' landscape cliking pictures and 
                looking for signs of life and learning about the Red Planet's unique environment."
        paraThree="This section features Pictures that Curosity captured today. (If Any)"
        feature="CUROSITY"
        path="/curosity"
      />

      <ImageTextContainer
        customStyles={curosityStyles}
        title="Curosity"
        explanation={explanation}
        className={classes.displayNone}
        ifLoading={requstLoading}
      >
        <label htmlFor="date"></label>
        <input
          id="date"
          type="date"
          className={classes.datePicker}
          min="1996-01-01"
          max={today}
          value={date}
          onChange={dateChangeHandeler}
        />
      </ImageTextContainer>
    </Fragment>
  );
};

export default memo(Curosity);
