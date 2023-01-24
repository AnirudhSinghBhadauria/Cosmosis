import React, { Fragment } from "react";
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
        <img src={image1} alt="photo-section-image1" />
        <img src={image2} alt="photo-section-image2" />
        <img src={image3} alt="photo-section-image3" />
      </div>
      <div>
        <img src={image4} alt="photo-section-image4" />
        <img src={image5} alt="photo-section-image5" />
        <img src={image6} alt="photo-section-image6" />
      </div>
      <div>
        <img src={image7} alt="photo-section-image7" />
        <img src={image8} alt="photo-section-image8" />
        <img src={image9} alt="photo-section-image9" />
      </div>
    </Fragment>
  );
};

export default HeroPhotoSection;
