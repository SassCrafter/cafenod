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

Flex.Row = function FlexRow({ children, flexDirection, ...restProps }) {
  return (
    <div
      className={`${classes.Row} ${classNames[flexDirection]}`}
      {...restProps}
    >
      {children}
    </div>
  );
};

Flex.Column = function FlexColumn({ children, ...restProps }) {
  return (
    <div className={classes.Column} {...restProps}>
      {children}
    </div>
  );
};
