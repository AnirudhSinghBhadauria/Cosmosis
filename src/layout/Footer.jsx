import React from "react";
import classes from "./styles/footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <video preload="none" className={classes.video} autoPlay muted loop>
        <source
          src="https://firebasestorage.googleapis.com/v0/b/cosmosis-ff4d9.appspot.com/o/GLOCK%20LOOP%20FINAL%20CUT.mp4?alt=media&token=7b2284ad-704f-4c7d-8e31-49a0aa7e66e3"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </footer>
  );
};

export default Footer;
