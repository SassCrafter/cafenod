import React from "react";
import classes from "./Item.module.scss";

function Item({ icon }) {
  return (
    <li className={classes.Item}>
      <a href="#">
        <i className={icon}></i>
      </a>
    </li>
  );
}

export default Item;
