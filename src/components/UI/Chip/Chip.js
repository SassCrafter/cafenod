import React from "react";
import classes from "./Chip.module.scss";

function Chip({ imgPath, imgAlt, title, subtitle }) {
  return (
    <div className={classes.Container}>
      <div className={classes.Image}>
        <img src={imgPath} alt={imgAlt} />
      </div>
      <div className={classes.Description}>
        <h4 className={classes.Title}>{title}</h4>
        <h5 className={classes.Subtitle}>{subtitle}</h5>
      </div>
    </div>
  );
}

export default Chip;
