import React from "react";
import { Autoplay } from "swiper";
import classes from "./Deco.module.scss";

function Deco({ imgPath, imgAlt, className }) {
  return (
    <div className={`${classes.Container} ${className}`}>
      <img src={imgPath} alt={imgAlt} />
    </div>
  );
}

export default Deco;
