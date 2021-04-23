import React from "react";
import classes from "./ShapeIcon.module.scss";
import { BigImage } from "../../index";

function ShapeIcon({ className, icon, alt }) {
  return (
    <div className={`${classes.Container} ${className || ""}`}>
      <img src={icon} alt={alt} />
    </div>
  );
}

export default ShapeIcon;
