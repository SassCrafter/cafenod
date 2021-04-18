import React from "react";
import classes from "./Flex.module.scss";

const classNames = {
  rowReverse: classes.RowRevers,
};

function Flex({ children, ...restProps }) {
  return (
    <div className={classes.Flex} {...restProps}>
      {children}
    </div>
  );
}

export default Flex;

Flex.Row = function FlexRow({
  children,
  flexDirection,
  className,
  ...restProps
}) {
  return (
    <div
      className={`${classes.Row} ${classNames[flexDirection]} ${
        className || ""
      }`}
      {...restProps}
    >
      {children}
    </div>
  );
};

Flex.Column = function FlexColumn({ children, className, ...restProps }) {
  return (
    <div className={`${classes.Column} ${className || ""}`} {...restProps}>
      {children}
    </div>
  );
};
