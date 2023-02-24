import React, { Fragment, memo } from "react";
import FaceComponent from "../components/FaceComponent";
import FeatureComponent from "../components/FeatureComponent";
import { cube } from "../assets/Links";
import { useState } from "react";
import classes from "./styles/kpod.module.scss";
import ImageTextContainer from "../components/ImageTextContainer";
import { useEffect, useContext } from "react";
import useHttps from "../hooks/useHttps";
import { authContext } from "../store/AuthContextProvider";

const KPOD = () => {
  const [date, setDate] = useState("2023-01-11");
  const [kpodData, setKPOData] = useState("");
  const [kpodStyles, setKpodStyles] = useState();
  const { requstLoading, sendRequest } = useHttps();
  const contextData = useContext(authContext);
  const { feature, today } = contextData;

  const { explanation, title } = kpodData;

  const face = {
    number: "C.XI S.XXI",
    heading: "SHORES OF THE COSMIC OCEAN",
    quote:
      "The known is finite, the unknown is infinite, intelectually we stand on a islet in the midst of an imitable ocean of inexcellebility. Our busniess in every genration is to reclaim a little more land.",
    author: "- T.H. HUXLEY",
  };

  const { number, heading, quote, author } = face;

  const dateChangeHandeler = (event) => {
    setDate(event.target.value);
  };

  useEffect(() => {
    const config = {
      url: `https://api.nasa.gov/planetary/apod?api_key=${
        import.meta.env.VITE_REACT_NASA_KEY
      }&date=${date}`,
    };

    const useKPOData = (data) => {
      setKpodStyles({ background: `url(${data.url}) center/cover` });
      setKPOData(data);
    };

    sendRequest(config, useKPOData);
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
        <img
          decoding="async"
          alt="cube"
          src={cube}
          fetchpriority="high"
          loading="eager"
        />
      </FaceComponent>

      <FeatureComponent
        paraOne={feature[2]?.paraOne}
        paraTwo={feature[3]?.paraTwo}
        feature={feature[3]?.feature}
        path={feature[3]?.path}
      />

      <ImageTextContainer
        customStyles={kpodStyles}
        title={title}
        explanation={explanation}
        ifLoading={requstLoading}
      >
        <label htmlFor="date"></label>
        <input
          id="date"
          type="date"
          min="1996-01-01"
          max={today}
          value={date}
          onChange={dateChangeHandeler}
          className={classes.datePicker}
        />
      </ImageTextContainer>
    </Fragment>
  );
};

export default memo(KPOD);
