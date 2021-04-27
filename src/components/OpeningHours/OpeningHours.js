import React from "react";
import classes from "./OpeningHours.module.scss";
import OpeningHoursData from "../../fixtures/openingHoursData.json";

function OpeningHours({ className }) {
  return (
    <div className={classes.Container}>
      <ul className={classes.List}>
        {OpeningHoursData.map((item) => (
          <li key={item.day} className={`${classes.Item} ${className}`}>
            {item.day} <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OpeningHours;
