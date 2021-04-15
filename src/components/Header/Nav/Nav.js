import React from "react";
import { NavLink } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";
import classes from "./Nav.module.scss";

const typeClasses = {
  mobile: classes.MobileNav,
  desktop: classes.DesktopNav,
};

function Nav({ type = "mobile", open }) {
  return (
    <nav
      className={[classes.Nav, typeClasses[type], open && classes.Open].join(
        " "
      )}
    >
      <ul className={classes.List}>
        <li>
          <NavLink
            exact
            to={ROUTES.HOME}
            activeClassName={classes.Active}
            className={classes.Link}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to={ROUTES.ABOUT}
            activeClassName={classes.Active}
            className={classes.Link}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to={ROUTES.BLOG}
            activeClassName={classes.Active}
            className={classes.Link}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to={ROUTES.CONTACT}
            activeClassName={classes.Active}
            className={classes.Link}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
