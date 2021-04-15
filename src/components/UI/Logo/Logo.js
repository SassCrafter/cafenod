import React from "react";
import { Link } from "react-router-dom";
import { HOME } from "../../../constants/routes";
import classes from "./Logo.module.scss";
import LogoImg from "../../../assests/images/logo-white.png";

function Logo() {
  return (
    <Link to={HOME} className={classes.Logo}>
      <img src={LogoImg} alt="cafenod" />
    </Link>
  );
}

export default Logo;
