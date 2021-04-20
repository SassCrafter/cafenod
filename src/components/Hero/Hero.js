import React from "react";
import classes from "./Hero.module.scss";
import HeroSlider from "./HeroSlider/HeroSlider";

function Hero() {
  return (
    <section className={classes.Hero}>
      <div className={classes.Container}>
        <HeroSlider />
      </div>
    </section>
  );
}

export default Hero;
