import React from "react";
import classes from "./TabList.module.scss";
import Tab from "../Tab/Tab";

function TabList({
  items,
  tabTextName,
  activeTabId,
  setActiveTabId,
  setActivePanelId,
  className,
}) {
  return (
    <ul className={`${classes.List} ${className || ""}`} data-aos="fade-up">
      {items?.map((item, idx) => (
        <Tab
          key={item.id}
          id={idx}
          isActive={activeTabId === idx}
          setActiveTabId={setActiveTabId}
          category={item.category}
          setActivePanelId={setActivePanelId}
        >
          {item[tabTextName]}
        </Tab>
      ))}
    </ul>
  );
}

export default TabList;
