import React, { Fragment, memo } from "react";
import classes from "./styles/ScientistSection.module.scss";

const ScientistSection = ({
  name,
  year,
  paraOne,
  paraTwo,
  paraThree,
  paraFour,
  image,
  quote,
}) => {
  const paras = [
    { para: paraOne, key: "one" },
    { para: paraTwo, key: "two" },
    { para: paraThree, key: "three" },
    { para: paraFour, key: "four" },
  ];
  return (
    <Fragment>
      <section className={classes.scientistContainer}>
        <div>
          <img
            alt="scientist-image"
            loading="eager"
            fetchpriority="high"
            src={image}
          />
        </div>
        <div>
          <p>{quote}</p>
        </div>
      </section>

      <section className={classes.about}>
        <div>
          <h1>{name}</h1>
          <h1>{year}</h1>
        </div>
        <div>
          {paras.map(({ para, key }) => (
            <p key={key}>{para}</p>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default memo(ScientistSection);
