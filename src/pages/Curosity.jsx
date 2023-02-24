import React, { Fragment, useEffect, useState, memo, useContext } from "react";
import FaceComponent from "../components/FaceComponent";
import FeatureComponent from "../components/FeatureComponent";
import classes from "./styles/curosity.module.scss";
import ImageTextContainer from "../components/ImageTextContainer";
import useHttps from "../hooks/useHttps";
import { authContext } from "../store/AuthContextProvider";

const Curosity = () => {
  const [date, setDate] = useState("2023-01-19");
  const { sendRequest, requstLoading } = useHttps();
  const [curosityStyles, setCurosityStyles] = useState({});
  const contextData = useContext(authContext);

  const { feature, today } = contextData;

  const dateChangeHandeler = (event) => setDate(event.target.value);

  const face = {
    number: "C.XI S.XXI",
    heading: "BLUES FOR A RED PLANET",
    quote:
      "The first human beings to land on Mars should not come back to Earth. They should be the beginning of a build-up of a colony/settlement, I call it a ‘permanence’.",
    author: "- Buzz Aldrin",
  };

  const explanation =
    "Curiosity is a car-sized Mars rover designed to explore the Gale crater on Mars as part of NASAs Mars Science Laboratory (MSL) mission. Curiosity was launched from Cape Canaveral (CCAFS) on November 26, 2011, at 15:02:00 UTC and landed on Aeolis Palus inside Gale crater on Mars on August 6, 2012, 05:17:57 UTC. The Bradbury Landing site was less than 2.4 km (1.5 mi) from the center of the touchdown target after a 560 million km (350 million mi) journey.In December 2012, Curiosity's two-year mission was extended indefinitely,[10] and on August 5, 2017, NASA celebrated the fifth anniversary of the Curiosity rover landing.";

  const { number, heading, quote, author } = face;

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
        number={number}
        heading={heading}
        quote={quote}
        author={author}
        className={classes.borderRadius}
      >
        <div className={classes.redPlanet}></div>
      </FaceComponent>

      <FeatureComponent
        paraOne={feature[1]?.paraOne}
        paraTwo={feature[1]?.paraTwo}
        feature={feature[1]?.feature}
        path={feature[1]?.path}
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
