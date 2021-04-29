import React from "react";
import classes from "./Tab.module.scss";

function Tab({
  children,
  isActive,
  id,
  setActiveTabId,
  category,
  setActivePanelId,
  ...restProps
}) {
  const clickHandler = () => {
    setActiveTabId(id);
    setActivePanelId(id);
  };
  return (
    <li
      className={`${classes.Tab} ${isActive && classes.Active}`}
      {...restProps}
      onClick={clickHandler}
    >
      {children}
    </li>
  );
}

export default Tab;
