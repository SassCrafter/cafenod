import React from "react";
import { Autoplay } from "swiper";
import classes from "./Deco.module.scss";

function Deco({
  imgPath,
  imgAlt,
  top = 0,
  left = 0,
  bottom = "auto",
  right = "auto",
  className,
}) {
  return (
    <div
      className={`${classes.Container} ${className}`}
      style={{ top, left, bottom, right }}
    >
      <img src={imgPath} alt={imgAlt} />
    </div>
  );
}

export default Deco;
