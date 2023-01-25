import classes from "./styles/rightsidenav.module.scss";
import ApodSVG from "../assets/SVG-Components/ApodSVG";
import IsroSVG from "../assets/SVG-Components/IsroSVG";
import CurositySVG from "../assets/SVG-Components/CurositySVG";
import KnowYAPOD from "../assets/SVG-Components/KnowYAPOD";
import { NavLink } from "react-router-dom";
import CardContent from "../components/CardContent";
import Button from "../components/Button";
import { useState } from "react";
import { profilePlaceHolderImage } from "../assets/Links";

const RightSideNav = () => {
  const [profilePicture, setProfilePicture] = useState(profilePlaceHolderImage);
  
  return (
    <div className={classes.rightSideWrapper}>
      <aside className={classes.cardContainer}>
        <NavLink
          to="/apod"
          className={({ isActive }) =>
            isActive
              ? ` ${classes.isActive} ${classes.baseClass} `
              : `${classes.baseClass}`
          }
        >
          <section className={classes.svgContainer}>
            <ApodSVG />
          </section>

          <section>
            <CardContent
              heading="APOD"
              desc="  Astornomical Picture of the Day. Each day a different photograph
              of our fascinating universe is featured."
              color="black"
            />
          </section>
        </NavLink>

        <NavLink
          to="/k-pod"
          className={({ isActive }) =>
            isActive
              ? ` ${classes.isActive} ${classes.baseClass} `
              : `${classes.baseClass}`
          }
        >
          <section className={classes.svgContainer}>
            <KnowYAPOD />
          </section>

          <section>
            <CardContent
              heading="Your APOD"
              desc=" See Astronomical Picture of the any Particular Day, Any Day, Maybe
              Your Birthday?"
              color="black"
            />
          </section>
        </NavLink>

        <NavLink
          to="/isro"
          className={({ isActive }) =>
            isActive
              ? ` ${classes.isActive} ${classes.baseClass} `
              : `${classes.baseClass}`
          }
        >
          <section className={classes.svgContainer}>
            <IsroSVG />
          </section>

          <section>
            <CardContent
              heading="ISRO"
              desc="The Indian Space Research Organisation is the national space
              agency of India."
              color="black"
            />
          </section>
        </NavLink>

        <NavLink
          to="/curosity"
          className={({ isActive }) =>
            isActive
              ? ` ${classes.isActive} ${classes.baseClass} `
              : `${classes.baseClass}`
          }
        >
          <section className={classes.svgContainer}>
            <CurositySVG />
          </section>

          <section>
            <CardContent
              heading="Curosity Rover"
              desc="Curiosity is a car-sized Mars rover. See What Curosity Rover
              clicked Today or any particular day."
              color="black"
            />
          </section>
        </NavLink>
      </aside>

      <aside className={classes.bottomContainer}>
        <div className={classes.profileContainer}>
          <img className={classes.profile} src={profilePicture} />
          <div className={classes.green}></div>
        </div>

        <div className={classes.buttonContainer}>
          <Button>Log In</Button>
          <Button>Sign Up</Button>
        </div>
      </aside>
    </div>
  );
};

export default RightSideNav;
