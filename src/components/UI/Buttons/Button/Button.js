import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.scss";
import classNames from "classnames";

function Button({
  children,
  onClick,
  btnType = "btn",
  fullWidth,
  maxWidth = "auto",
  outline,
  dark,
  className,
  ...restProps
}) {
  const btnClasses = classNames({
    [classes.Btn]: true,
    [classes.Dark]: dark,
    [classes.Outline]: outline,
    [className]: className,
    [classes.FullWidth]: fullWidth,
  });

  const returnEl =
    btnType === "link" ? (
      <Link
        className={btnClasses}
        onClick={onClick}
        {...restProps}
        style={{ maxWidth: maxWidth }}
      >
        {children}
      </Link>
    ) : (
      <button
        className={btnClasses}
        onClick={onClick}
        {...restProps}
        style={{ maxWidth: maxWidth }}
      >
        {children}
      </button>
    );
  return returnEl;
}

export default Button;
