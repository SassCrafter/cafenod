import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.scss";

function Button({
  children,
  clickHandler,
  btnType = "btn",
  maxWidth = "auto",
  outline,
  className,
  ...restProps
}) {
  const returnEl =
    btnType === "link" ? (
      <Link
        className={[classes.Btn, outline && classes.Outline, className].join(
          " "
        )}
        onClick={clickHandler}
        {...restProps}
      >
        {children}
      </Link>
    ) : (
      <button
        className={[classes.Btn, outline && classes.Outline, className].join(
          " "
        )}
        onClick={clickHandler}
        style={{ maxWidth: maxWidth }}
      >
        {children}
      </button>
    );
  return returnEl;
}

export default Button;
