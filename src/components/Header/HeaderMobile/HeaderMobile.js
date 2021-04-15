import React from "react";
import { Link } from "react-router-dom";
import { CONTACT } from "../../../constants/routes";
import Cart from "../Cart/Cart";
import Search from "../Search/Search";
import Nav from "../Nav/Nav";
import { Logo, Button } from "../../index";
import classes from "./HeaderMobile.module.scss";

function HeaderMobile({ isNavOpen, toggleNav }) {
  return (
    <div className={["container", classes.Container].join(" ")}>
      <Logo />
      <div className={classes.Right}>
        <div
          className={[classes.Burger, isNavOpen && classes.Open].join(" ")}
          onClick={toggleNav}
        >
          <span className={classes.BurgerLine}></span>
        </div>
        <Search />
        <Cart />
        <div className={classes.ContactButton}>
          <Button btnType="link" to={CONTACT}>
            Contact
          </Button>
        </div>
      </div>
      <Nav type="mobile" open={isNavOpen} />
    </div>
  );
}

export default HeaderMobile;
