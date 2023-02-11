import React from "react";
import styles from "./styles/leftsidenav.module.scss";
import LogoSVG from "../assets/SVG-Components/LogoSVG";
import ApodSVG from "../assets/SVG-Components/ApodSVG";
import KnowYAPOD from "../assets/SVG-Components/KnowYAPOD";
import CurositySVG from "../assets/SVG-Components/CurositySVG";
import IsroSVG from "../assets/SVG-Components/IsroSVG";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  return (
    <nav className={styles.sideNavContainer}>
      <NavLink
        aria-label="Home"
        name="home"
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles.active}` : `${styles.unActive}`
        }
      >
        <LogoSVG />
      </NavLink>

      <NavLink
        aria-label="APOD"
        name="apod"
        to="/apod"
        className={({ isActive }) =>
          isActive ? `${styles.active}` : `${styles.unActive}`
        }
      >
        <ApodSVG />
      </NavLink>

      <NavLink
        aria-label="KPOD"
        name="kpod"
        to="/k-pod"
        className={({ isActive }) =>
          isActive ? `${styles.active}` : `${styles.unActive}`
        }
      >
        <KnowYAPOD />
      </NavLink>

      <NavLink
        aria-label="CUROSITY"
        name="curosity"
        to="/curosity"
        className={({ isActive }) =>
          isActive ? `${styles.active}` : `${styles.unActive}`
        }
      >
        <CurositySVG />
      </NavLink>

      <NavLink
        aria-label="ISRO"
        name="isro"
        to="/ISRO"
        className={({ isActive }) =>
          isActive ? `${styles.active}` : `${styles.unActive}`
        }
      >
        <IsroSVG />
      </NavLink>
    </nav>
  );
};

export default LeftSideNav;
