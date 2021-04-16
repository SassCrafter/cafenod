import React from "react";
import classes from "./TabList.module.scss";
import Tab from "../Tab/Tab";

function TabList({ items, activeTabId, setActiveTabId }) {
  return (
    <ul className={classes.List}>
      {items?.map((item, idx) => (
        <Tab
          key={item.id}
          id={idx}
          isActive={activeTabId === idx}
          setActiveTabId={setActiveTabId}
        >
          {item.category}
        </Tab>
      ))}
    </ul>
  );
}

export default TabList;
