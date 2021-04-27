import React from "react";
import classes from "./SM.module.scss";
import Item from "./Item/Item";

function SM({ items }) {
  return (
    <ul className={classes.List}>
      {items.map((item) => (
        <Item key={item.id} icon={item.icon} />
      ))}
    </ul>
  );
}

export default SM;
