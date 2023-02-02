import React, { Fragment, useEffect, useState } from "react";
import FaceComponent from "../components/FaceComponent";
import FeatureComponent from "../components/FeatureComponent";
import { threeCircle } from "../assets/Links";
import classes from "./styles/apod.module.scss";
import useHttps from "../hooks/useHttps";
import ImageTextContainer from "../components/ImageTextContainer";

const APOD = () => {
  const { sendRequest, requstLoading } = useHttps();
  const [data, setData] = useState({});
  const { url, title, explanation } = data;

  useEffect(() => {
    const config = {
      url: "https://api.nasa.gov/planetary/apod?api_key=toYv1iFdC2whBimODshxo0M04nnTVIG08fCaiLBT",
    };

    const nasaData = (data) => setData(data);

    sendRequest(config, nasaData);
  }, [sendRequest]);

  const apodStyles = { background: `url(${url}) center/cover` };

  return (
    <Fragment>
      <FaceComponent
        number="C.XI S.XXI"
        heading="THE HARMONY OF WORLDS"
        quote="The diversity of phenomenon of nature is so great, and the treasures hidden in the heavens so rich, pricisly in order that the human mind shall never be locking in fresh nourishment."
        author="- JOHANNES KEPLER"
        className={classes.FaceComponent}
      >
        <img alt="Three Circles" src={threeCircle} />
      </FaceComponent>

      <FeatureComponent
        paraOne="Astronomy Picture of the Day. The pictures and descriptions often
          relate to current events in astronomy and space exploration."
        paraTwo="Each day a different image or photograph of our fascinating universe
          is featured, along with a brief explanation written by a professional
          astronomer."
        feature="APOD"
        path="/apod"
      />

      <ImageTextContainer
        customStyles={apodStyles}
        title={title}
        explanation={explanation}
        ifLoading = {requstLoading}
      >
      </ImageTextContainer>
    </Fragment>
  );
};

export default APOD;
