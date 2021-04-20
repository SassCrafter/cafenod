import React from "react";
import classes from "./OfferInfo.module.scss";

function OfferInfo({ children, className, title, titleIcon }) {
  return (
    <div className={`${classes.Container} ${className}`}>
      <h4 className={classes.Title}>
        {title} {titleIcon && <i className={titleIcon}></i>}
      </h4>
      {children}
    </div>
  );
}

export default OfferInfo;
