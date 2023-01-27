import React, { Fragment } from "react";
import FaceComponent from "../components/FaceComponent";
import FeatureComponent from "../components/FeatureComponent";
import { threeCircle } from "../assets/Links";
import classes from "./styles/apod.module.scss";
import useHttps from "../hooks/useHttps";

const APOD = () => {
  const { requestError, requstLoading, sendRequest } = useHttps(
    config,
    getDataFromUseHttps
  );

  const config = { url: "" };

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
    </Fragment>
  );
};

export default APOD;
