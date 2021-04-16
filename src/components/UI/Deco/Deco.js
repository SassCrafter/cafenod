import React from "react";
import classes from "./Deco.module.scss";

function Deco({ imgPath, imgAlt, top = 0, left = 0 }) {
  return (
    <div className={classes.Container} style={{ top, left }}>
      <img src={imgPath} alt={imgAlt} />
    </div>
  );
}

export default Deco;
