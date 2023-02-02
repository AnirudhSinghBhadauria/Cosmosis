import React from "react";
import LeftSideNav from "./LeftSideNav";
import RightSideNav from "./RightSideNav";
import Footer from "./Footer";
import classes from "./styles/layout.module.scss";
import { authContext } from "../store/AuthContextProvider";
import { useContext } from "react";

const Layout = (props) => {
  const { ifSideBarOpen, changeSideBarState } = useContext(authContext);

  const sideBarChangeHandeler = () => {
    ifSideBarOpen === false
      ? changeSideBarState(true)
      : changeSideBarState(false);
  };

  let className;
  if (ifSideBarOpen === true) {
    className = `${classes.sideBarOpen}`;
  } else {
    className = `${classes.sideBarClose}`;
  }

  return (
    <div className={classes.wrapper}>
      <LeftSideNav />
      <div className={classes.container}>
        <div
          onClick={sideBarChangeHandeler}
          className={`${classes.sidebarOpener} ${className}`}
        ></div>
        <main>{props.children}</main>
        {/* <Footer /> */}
      </div>
      <RightSideNav />
    </div>
  );
};

export default Layout;
