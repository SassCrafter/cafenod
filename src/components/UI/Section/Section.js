import React from "react";
import classes from "./Section.module.scss";

function Section({ children, className, container = true }) {
  return (
    <section className={`${classes.Section} ${className || ""}`}>
      {!container ? children : <div className="container">{children}</div>}
    </section>
  );
}

export default Section;
