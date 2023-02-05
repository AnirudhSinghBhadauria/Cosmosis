import React, { Fragment } from "react";
import FaceComponent from "../components/FaceComponent";
import FeatureComponent from "../components/FeatureComponent";
import { cube } from "../assets/Links";
import { useState } from "react";
import { today } from "../assets/data";
import classes from "./styles/kpod.module.scss";
import ImageTextContainer from "../components/ImageTextContainer";
import { useEffect } from "react";
import useHttps from "../hooks/useHttps";

const KPOD = () => {
  const [date, setDate] = useState("2023-01-11");
  const [kpodData, setKPOData] = useState("");
  const [kpodStyles, setKpodStyles] = useState();
  const { requstLoading, sendRequest } = useHttps();

  const { explanation, title } = kpodData;

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
        number="C.XI S.XXI"
        heading="SHORES OF THE COSMIC OCEAN"
        quote="The known is finite, the unknown is infinite, intelectually we stand on a islet in the midst of an imitable ocean of inexcellebility. Our busniess in every genration is to reclaim a little more land."
        author="- T.H. HUXLEY"
        className={classes.borderRadius}
      >
        <img alt="cube" src={cube} fetchpriority="high" loading="eager" />
      </FaceComponent>

      <FeatureComponent
        paraOne="Each day a different image or photograph of our fascinating universe
        is featured in APOD,"
        paraTwo=" In this section, Any APOD of any particular date can be found out along with a  brief explanation written by a professional astronomer."
        feature="K-POD"
        path="/k-pod"
      />

      <ImageTextContainer
        customStyles={kpodStyles}
        title={title}
        explanation={explanation}
        ifLoading={requstLoading}
      >
        <input
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

export default KPOD;

// `https://api.nasa.gov/planetary/apod?api_key=toYv1iFdC2whBimODshxo0M04nnTVIG08fCaiLBT&date=2023-01-30`
