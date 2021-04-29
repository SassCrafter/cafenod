import React, { useState, useEffect } from "react";
import TabPanel from "../TabPanel/TabPanel";
import classes from "./TabPanelList.module.scss";
import { PRODUCT } from "../../../../constants/routes";

function TabPanelList({ children }) {
  const [listClasses, setListClasses] = useState(`${classes.List}`);

  useEffect(() => {
    setListClasses(`${classes.List} ${classes.Animate}`);

    const timer = setTimeout(() => {
      setListClasses(`${classes.List}`);
    }, 700);

    return () => {
      clearTimeout(timer);
    };
  }, [children]);

  return <ul className={listClasses}>{children}</ul>;
}

export default TabPanelList;
