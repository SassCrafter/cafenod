import React from "react";
import classes from "./HeaderDesktop.module.scss";
import { Logo, Button } from "../../index";
import { CONTACT } from "../../../constants/routes";
import Nav from "../Nav/Nav";
import Search from "../Search/Search";
import Cart from "../Cart/Cart";

function HeaderDesktop() {
  return (
    <div className={classes.Container}>
      <div className={classes.Item}>
        <Logo />
        <Nav type="desktop" />
      </div>
      <div className={classes.Item}>
        <Search />
        <Cart />
        <Button btnType="link" to={CONTACT}>
          Contact Us
        </Button>
      </div>
    </div>
  );
}

export default HeaderDesktop;
