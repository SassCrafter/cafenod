import React from "react";
import classes from "./Section.module.scss";

function Section({ children, className }) {
  return (
    <section className={`${classes.Section} ${className || ""}`}>
      <div className="container">{children}</div>
    </section>
  );
}

export default Section;
