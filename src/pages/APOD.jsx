import React, { Fragment, useContext, useEffect, useState } from "react";
import FaceComponent from "../components/FaceComponent";
import FeatureComponent from "../components/FeatureComponent";
import { threeCircle } from "../assets/Links";
import classes from "./styles/apod.module.scss";
import useHttps from "../hooks/useHttps";
import ImageTextContainer from "../components/ImageTextContainer";
import { authContext } from "../store/AuthContextProvider";

const APOD = () => {
  const { sendRequest, requstLoading } = useHttps();
  const [data, setData] = useState({});
  const { url, title, explanation } = data;
  const { feature } = useContext(authContext);

  const face = {
    number: "C.XI S.XXI",
    heading: "THE HARMONY OF WORLDS",
    quote:
      "The diversity of phenomenon of nature is so great, and the treasures hidden in the heavens so rich, pricisly in order that the human mind shall never be locking in fresh nourishment.",
    author: "- JOHANNES KEPLER",
  };

  const { number, heading, quote, author } = face;

  useEffect(() => {
    const config = {
      url: import.meta.env.VITE_REACT_APOD_URL,
    };

    const nasaData = (data) => setData(data);

    sendRequest(config, nasaData);
  }, [sendRequest]);

  const apodStyles = { background: `url(${url}) center/cover` };

  return (
    <Fragment>
      <FaceComponent
        number={number}
        heading={heading}
        quote={quote}
        author={author}
        className={classes.FaceComponent}
      >
        <img
          decoding="async"
          alt="Three Circles"
          src={threeCircle}
          fetchpriority="high"
          loading="eager"
        />
      </FaceComponent>

      <FeatureComponent
        paraOne={feature[0]?.paraOne}
        paraTwo={feature[0]?.paraTwo}
        feature={feature[0]?.feature}
        path={feature[0]?.path}
      />

      <ImageTextContainer
        customStyles={apodStyles}
        title={title}
        explanation={explanation}
        ifLoading={requstLoading}
      />
    </Fragment>
  );
};

export default APOD;
