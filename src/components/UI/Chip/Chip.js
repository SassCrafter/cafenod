import React from "react";
import classes from "./Chip.module.scss";
import { Button } from "../../index";

function Chip({
  imgPath,
  imgAlt,
  title,
  subtitle,
  btnText = "Learn More",
  btnTo,
  btnClass,
}) {
  return (
    <div className={classes.Container}>
      <Button
        btnType="link"
        to={btnTo}
        className={`${classes.Btn} ${btnClass || ""}`}
      >
        {btnText}
      </Button>
      <div className={classes.Content}>
        <div className={classes.Image}>
          <img src={imgPath} alt={imgAlt} />
        </div>
        <div className={classes.Description}>
          <h4 className={classes.Title}>{title}</h4>
          <h5 className={classes.Subtitle}>{subtitle}</h5>
        </div>
      </div>
    </div>
  );
}

export default Chip;
