import React from "react";
import classes from "./styles/footer.module.scss";
import { footerVideo } from '../assets/Links'

const Footer = () => {
  return (
    <footer>
      <video preload="none" className={classes.video} autoPlay muted loop>
        <source
          src={footerVideo}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </footer>
  );
};

export default Footer;
