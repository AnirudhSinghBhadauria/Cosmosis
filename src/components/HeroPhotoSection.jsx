import React, { memo, Fragment } from "react";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
} from "../assets/Links";

const HeroPhotoSection = () => {
  return (
    <Fragment>
      <div>
        <img loading="eager" src={image1} alt="photo-section-image1" />
        <img loading="eager" src={image2} alt="photo-section-image2" />
        <img loading="eager" src={image3} alt="photo-section-image3" />
      </div>
      <div>
        <img loading="eager" src={image4} alt="photo-section-image4" />
        <img loading="eager" src={image5} alt="photo-section-image5" />
        <img loading="eager" src={image6} alt="photo-section-image6" />
      </div>
      <div>
        <img loading="eager" src={image7} alt="photo-section-image7" />
        <img loading="eager" src={image8} alt="photo-section-image8" />
        <img loading="eager" src={image9} alt="photo-section-image9" />
      </div>
    </Fragment>
  );
};

export default memo(HeroPhotoSection);
