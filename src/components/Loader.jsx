import React, {memo} from "react";
import classes from "./styles/loader.module.scss";

const Loader = () => {
  return (
    <div className={classes.loader}>
      <div className={classes.dot}> </div>
    </div>
  );
};

export default Loader;
