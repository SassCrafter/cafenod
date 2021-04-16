import React from "react";
import classes from "./SmallOverlay.module.scss";

function SmallOverlay({ children, bg = "/images/misc/bg_01.png" }) {
  return (
    <div className={classes.Container} style={{ background: `url('${bg}')` }}>
      {children}
    </div>
  );
}

export default SmallOverlay;
