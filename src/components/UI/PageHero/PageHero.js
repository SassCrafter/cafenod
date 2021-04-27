import React from "react";
import classes from "./PageHero.module.scss";
import { Title, ShapeIcon } from "../../index";

function PageHero({ bg, title }) {
  return (
    <section
      className={classes.Container}
      style={{ backgroundImage: `url('${bg}')` }}
    >
      <div className={`container ${classes.Content}`} data-aos="fade-up">
        <div className={classes.Text}>
          <Title>{title || "Check Out"}</Title>
        </div>
      </div>
      <ShapeIcon
        className={classes.Icon}
        icon="/images/misc/icon-coffee.png"
        position={{ position: "absolute", bottom: "-3rem", left: "15%" }}
        data-aos="fade-up"
      />
    </section>
  );
}

export default PageHero;
