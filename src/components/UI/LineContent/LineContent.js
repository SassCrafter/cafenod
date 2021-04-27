import React from "react";
import classes from "./LineContent.module.scss";
import { Title, ShapeIcon } from "../../index";
function LineContent({ title, icon, text, ...restProps }) {
  return (
    <div className={classes.Container} {...restProps}>
      <ShapeIcon icon={icon} className={classes.Icon} />

      <Title className={classes.Title}>{title}</Title>
      <p className={classes.Text}>{text}</p>
    </div>
  );
}

export default LineContent;
