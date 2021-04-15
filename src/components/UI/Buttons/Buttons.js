import React from "react";
import classes from "./Buttons.module.scss";

function Buttons({ children, className, maxWidth = "auto" }) {
  return (
    <div
      className={[classes.Buttons, className].join(" ")}
      style={{ maxWidth: maxWidth }}
    >
      {children}
    </div>
  );
}

export default Buttons;
