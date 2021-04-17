import React, { useState } from "react";
import classes from "./Tabs.module.scss";
import TabList from "./TabList/TabList";
import TabPanel from "./TabPanel/TabPanel";
import MenuItemsData from "../../../fixtures/menuItems.json";

function Tabs({ items }) {
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <div className={classes.Container}>
      <TabList
        items={items}
        activeTabId={activeTabId}
        setActiveTabId={setActiveTabId}
      />
      {MenuItemsData.map((item) => (
        <TabPanel
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default Tabs;
