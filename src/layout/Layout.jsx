import React, { useEffect } from "react";
import LeftSideNav from "./LeftSideNav";
import RightSideNav from "./RightSideNav";
import Footer from "./Footer";
import classes from "./styles/layout.module.scss";
import { authContext } from "../store/AuthContextProvider";
import { useContext } from "react";
import { useLocation } from "react-router";
import ErrorModal from "../components/Modal";

const Layout = (props) => {
  let className;

  const {
    ifSideBarOpen,
    changeSideBarState,
    modalMessage,
    error,
    modalHandeler,
  } = useContext(authContext);
  const { pathname } = useLocation();

  const sideBarChangeHandeler = () => {
    ifSideBarOpen === false
      ? changeSideBarState(true)
      : changeSideBarState(false);
  };

  if (ifSideBarOpen === true) {
    className = `${classes.sideBarOpen}`;
  } else {
    className = `${classes.sideBarClose}`;
  }

  const loadingHandeler = (action) => {
    console.log("loaded Succesfully!");
  };

  useEffect(() => {
    document.querySelector("#container").scrollTo(0, 0);
  }, [pathname]);

  let startingX, startingY, endingX, endingY;
  let moving = false;

  const touchStartHandeler = (action) => {
    startingX = action.changedTouches[0].clientX;
    startingY = action.changedTouches[0].clientY;
  };

  const touchMoveHandeler = (action) => {
    moving = true;
    endingX = action.changedTouches[0].clientX;
    endingY = action.changedTouches[0].clientX;
  };

  const touchEndHandeler = (action) => {
    if (Math.abs(endingX - startingX) > Math.abs(endingY - startingY)) {
      if (endingX > startingX) {
        changeSideBarState(false);
      } else {
        changeSideBarState(true);
      }
    }
    moving = false;
  };

  const loadManager =()=>{
    console.log('loaded Succesfully')
  }

  // localStorage.getItem()

  return (
    <div
      onTouchStart={touchStartHandeler}
      onTouchMove={touchMoveHandeler}
      onTouchEnd={touchEndHandeler}
      className={classes.wrapper}
      onLoad={loadManager}
    >
      <LeftSideNav />
      <div id="container" className={classes.container}>
        <div
          onClick={sideBarChangeHandeler}
          className={`${classes.sidebarOpener} ${className}`}
        ></div>
        <main>{props.children}</main>
        <Footer />
        {error && <ErrorModal message={modalMessage} onClick={modalHandeler} />}
      </div>
      <RightSideNav />
    </div>
  );
};

export default Layout;
