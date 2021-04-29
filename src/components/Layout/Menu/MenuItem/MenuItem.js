import React from "react";
import classes from "./MenuItem.module.scss";
import { Card } from "../../../index";
import { Link } from "react-router-dom";

function MenuItem({ id, image, title, description, price, linkTo, className }) {
  console.log(className);
  //   if (!image || !title || !description || !price) return null;
  const linkToData = {
    pathname: linkTo,
    id,
    image,
    name: title,
    price,
  };
  return (
    <Card className={`${classes.Panel} ${className || ""}`} data-aos="fade-up">
      <Link to={linkToData} className={classes.PanelLink}>
        <div className={classes.Description}>
          <div className={classes.Image}>
            <img src={image} alt={title} />
          </div>
          <div className={classes.Text}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
        <div className={classes.Price}>
          <h2>
            <span>$</span>
            {price}
          </h2>
        </div>
      </Link>
    </Card>
  );
}

export default MenuItem;
