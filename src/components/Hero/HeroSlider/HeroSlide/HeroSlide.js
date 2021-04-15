import React from "react";
import classes from "./HeroSlide.module.scss";
import { Buttons, Button } from "../../../index";

function HeroSlide({ item }) {
  return (
    <div className={classes.Slide}>
      <div className={classes.Text}>
        <h2 className={classes.Title}>{item.title}</h2>
        <p className={classes.Lead}>{item.lead}</p>
        <Buttons className={classes.Buttons}>
          <Button maxWidth="20rem">Testy Coffee</Button>
          <Button outline maxWidth="20rem">
            Learn More
          </Button>
        </Buttons>
      </div>
    </div>
  );
}

export default HeroSlide;
