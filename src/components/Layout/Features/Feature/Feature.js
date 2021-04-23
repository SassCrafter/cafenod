import React from "react";
import classes from "./Feature.module.scss";

function Feature({ title, description, icon, counter }) {
  return (
    <div className={classes.Feature} data-aos="fade-up">
      <div className={classes.Top}>
        <div className={classes.Icon}>
          <img src={icon} alt={title} />
        </div>
        <span className={classes.Counter}>{counter}</span>
      </div>
      <div className={classes.Body}>
        <h3 className={classes.Title}>{title}</h3>
        <p className={classes.Description}>{description}</p>
      </div>
    </div>
  );
}

export default Feature;
