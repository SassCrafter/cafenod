import React from "react";
import classes from "./Text.module.scss";

function Text({ children, ...restProps }) {
  return (
    <div className={classes.Container} {...restProps}>
      {children}
    </div>
  );
}

export default Text;

Text.Title = function TextTitle({
  children,
  textAlign = "left",
  color,
  ...restProps
}) {
  return (
    <div
      className={`${classes.Title} ${color === "white" ? "white-color" : ""}`}
      {...restProps}
      style={{ textAlign }}
    >
      {children}
    </div>
  );
};
Text.SmallTitle = function TextSmallTitle({ children, ...restProps }) {
  return (
    <h4 className={classes.SmallTitle} {...restProps}>
      {children}
    </h4>
  );
};
Text.BigTitle = function TextBigTitle({ children, ...restProps }) {
  return (
    <h3 className={classes.BigTitle} {...restProps}>
      {children}
    </h3>
  );
};
Text.Paragraph = function TextParagraph({ children, ...restProps }) {
  return (
    <p className={classes.Paragraph} {...restProps}>
      {children}
    </p>
  );
};
Text.Icon = function TextIcon({ className }) {
  return <i className={`${classes.Icon} ${className}`}></i>;
};
