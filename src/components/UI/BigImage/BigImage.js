import React from "react";
import classes from "./BigImage.module.scss";

function BigImage({ children, style, className, ...restProps }) {
  return (
    <div className={`${classes.Container} ${className}`} style={style}>
      <img {...restProps} />
      {children}
    </div>
  );
}

export default BigImage;
