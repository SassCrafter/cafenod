import React from "react";
import classes from "./PageHero.module.scss";
import { Title, ShapeIcon } from "../../index";

function PageHero({ bg }) {
  return (
    <section
      className={classes.Container}
      style={{ backgroundImage: `url('${bg}')` }}
    >
      <div className={`container ${classes.Content}`}>
        <div className={classes.Text}>
          <Title>Check Out</Title>
        </div>
      </div>
      <ShapeIcon
        className={classes.Icon}
        icon="/images/misc/icon-coffee.png"
        position={{ position: "absolute", bottom: "-3rem", left: "4rem" }}
      />
    </section>
  );
}

export default PageHero;
