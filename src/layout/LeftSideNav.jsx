import React from "react";
import styles from "./styles/leftsidenav.module.scss";
import LogoSVG from '../assets/SVG-Components/LogoSVG'
import ApodSVG from '../assets/SVG-Components/ApodSVG'
import KnowYAPOD from '../assets/SVG-Components/KnowYAPOD'
import CurositySVG from '../assets/SVG-Components/CurositySVG'
import IsroSVG from '../assets/SVG-Components/IsroSVG'
import ProfileSVG from '../assets/SVG-Components/ProfileSVG'
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  return (
    <nav className={styles.sideNavContainer}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.active}` : `${styles.unActive}`
          }
        >
         <LogoSVG />
        </NavLink>

        <NavLink
          to="/apod"
          className={({ isActive }) =>
            isActive ? `${styles.active}` : `${styles.unActive}`
          }
        >
         <ApodSVG />
        </NavLink>

        <NavLink
          to="/k-pod"
          className={({ isActive }) =>
            isActive ? `${styles.active}` : `${styles.unActive}`
          }
        >
          <KnowYAPOD />
        </NavLink>

        <NavLink
          to="/curosity"
          className={({ isActive }) =>
            isActive ? `${styles.active}` : `${styles.unActive}`
          }
        >
          <CurositySVG />
        </NavLink>

        <NavLink
          to="/ISRO"
          className={({ isActive }) =>
            isActive ? `${styles.active}` : `${styles.unActive}`
          }
        >
          <IsroSVG />
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? `${styles.active}` : `${styles.unActive}`
          }
        >
         <ProfileSVG />
        </NavLink>
    </nav>
  );
};

export default LeftSideNav;
