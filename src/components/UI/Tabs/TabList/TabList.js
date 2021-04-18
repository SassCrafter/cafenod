import React from "react";
import classes from "./TabList.module.scss";
import Tab from "../Tab/Tab";

function TabList({ items, activeTabId, setActiveTabId, setActiveCategory }) {
  return (
    <ul className={classes.List}>
      {items?.map((item, idx) => (
        <Tab
          key={item.id}
          id={idx}
          isActive={activeTabId === idx}
          setActiveTabId={setActiveTabId}
          category={item.category}
          setActiveCategory={setActiveCategory}
        >
          {item.category}
        </Tab>
      ))}
    </ul>
  );
}

export default TabList;
