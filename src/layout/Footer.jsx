import React from "react";
import { footer } from "../assets/Links";
import classes from "./styles/footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className={classes.footerContainer}>
        <section>
          <h1>
         
            <Link to="/" preventScrollReset={false}>
              COSMOSIS
            </Link>
          </h1>

          <div className={classes.iconHolder}>
            <a
              href="https://github.com/AnirudhSinghBhadauria/Cosmosis"
              name="github"
              target="_blank"
            >
              <h2>GITHUB</h2>
            </a>
            <a
              href="https://twitter.com/LieCheatSteal_"
              name="twitter"
              target="_blank"
            >
              <h2>TWITTER</h2>
            </a>
            <a
              target="_blank"
              name="contact"
              href="https://mail.google.com/mail/u/0/?hl=en&tf=cm&fs=1&to=imanirudhbhadauria@proton.me"
            >
              <h2>CONTACT</h2>
            </a>
          </div>
        </section>
        <img src={footer} loading="eager" fetchpriority='high' alt="Footer Image" />
      </div>
    </footer>
  );
};

export default Footer;
