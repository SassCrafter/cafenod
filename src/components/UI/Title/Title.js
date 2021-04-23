import React from "react";
import classes from "./Title.module.scss";

function Title({ children, className }) {
  return <h2 className={`${classes.Title} ${className || ""}`}>{children}</h2>;
}

export default Title;
