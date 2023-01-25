import React, { Fragment } from "react";
import FaceComponent from "../components/FaceComponent";
import FeatureComponent from "../components/FeatureComponent";
import { cube } from "../assets/Links";

const KPOD = () => {
  return (
    <Fragment>
      <FaceComponent
        number="C.XI S.XXI"
        heading="SHORES OF THE COSMIC OCEAN"
        quote="The known is finite, the unknown is infinite, intelectually we stand on a islet in the midst of an imitable ocean of inexcellebility. Our busniess in every genration is to reclaim a little more land."
        author="- T.H. HUXLEY"
      >
        <img alt="cube" src={cube} />
      </FaceComponent>

      <FeatureComponent
        paraOne="Each day a different image or photograph of our fascinating universe
        is featured in APOD,"
        paraTwo=" In this section, Any APOD of any particular date can be found out along with a  brief explanation written by a professional astronomer."
        feature="K-POD"
        path="/k-pod"
      />
    </Fragment>
  );
};

export default KPOD;
