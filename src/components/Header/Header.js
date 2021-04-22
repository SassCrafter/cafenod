import React, { useState, useEffect } from "react";
import classNames from "classnames";
import classes from "./Header.module.scss";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";
import { getWindowWidth } from "../../utils/utils";

function Header({ onCartButtonClick }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const scrollTop = window.scrollY;

      if (scrollTop > 149) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
    window.addEventListener("resize", changeHeader);
  }, []);

  const changeHeader = () => {
    const screenWidth = getWindowWidth();
    if (screenWidth >= 900) {
      setIsMobileView(false);
    } else {
      setIsMobileView(true);
    }
  };

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  // const headerClasses = classNames({
  //   [classes.Header]: true,
  //   [classes.Open]: isNavOpen,
  //   [classes.Scrolled]: isScrolled,
  // });

  const mobileClasses = classNames({
    [classes.Header]: true,
    [classes.HeaderMobile]: true,
    [classes.Open]: isNavOpen,
  });

  const desktopClasses = classNames({
    [classes.Header]: true,
    [classes.HeaderMobile]: false,
    [classes.Open]: isNavOpen,
    [classes.Scrolled]: isScrolled,
  });

  return (
    <header
      onLoad={changeHeader}
      className={isMobileView ? mobileClasses : desktopClasses}
    >
      {isMobileView ? (
        <HeaderMobile
          isNavOpen={isNavOpen}
          toggleNav={toggleNav}
          onCartButtonClick={onCartButtonClick}
        />
      ) : (
        <HeaderDesktop onCartButtonClick={onCartButtonClick} />
      )}
    </header>
  );
}

export default Header;
