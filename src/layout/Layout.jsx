import React from "react";
import LeftSideNav from "./LeftSideNav";
import RightSideNav from './RightSideNav'
import Footer from "./Footer";
import classes from './styles/layout.module.scss'

const Layout = (props) => {
  return (
      <div className={classes.wrapper}>
        <LeftSideNav />
        <div className={classes.container}>
          <main>{props.children}</main>
          {/* <Footer /> */}
        </div>
        <RightSideNav />
      </div>
  );
};

export default Layout;
