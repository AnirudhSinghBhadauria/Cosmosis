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
              href="https://www.linkedin.com/in/anirudh-singh-bhadauria-7008a2265?lipi=urn%3Ali%3Apage%3Aprofile_edit_contact_info%3B43a9b0c4-4eb2-495d-a804-3f3d12437a5b"
              name="Linkedin"
              target="_blank"
            >
              <h2>LINKEDIN</h2>
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
