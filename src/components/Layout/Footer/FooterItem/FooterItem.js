import React from "react";
import classes from "./FooterItem.module.scss";

function FooterItem({ children, title }) {
  return (
    <div className={classes.Container} data-aos="fade-up">
      {title && <h3 className={classes.Title}>{title}</h3>}
      {children}
    </div>
  );
}

export default FooterItem;
