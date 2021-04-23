import React from "react";
import classes from "./PageHero.module.scss";
import { Title } from "../../index";

function PageHero({ bg }) {
  console.log(bg);
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
    </section>
  );
}

export default PageHero;
