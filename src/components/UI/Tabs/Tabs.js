import React, { useState } from "react";
import classes from "./Tabs.module.scss";
import TabList from "./TabList/TabList";
import TabPanel from "./TabPanel/TabPanel";
import TabPanelList from "./TabPanelList/TabPanelList";
import MenuItemsData from "../../../fixtures/menuItems.json";

function Tabs({ items }) {
  const [activeTabId, setActiveTabId] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");

  let filteredItems = [];

  if (activeCategory === "all") {
    filteredItems = MenuItemsData;
  } else {
    filteredItems = MenuItemsData.filter(
      (item) => item.category === activeCategory
    );
  }

  return (
    <div className={classes.Container}>
      <TabList
        items={items}
        activeTabId={activeTabId}
        setActiveTabId={setActiveTabId}
        setActiveCategory={setActiveCategory}
      />
      <TabPanelList items={filteredItems} />
    </div>
  );
}

export default Tabs;

// <div className={classes.Container}>
//       <TabList
//         items={items}
//         activeTabId={activeTabId}
//         setActiveTabId={setActiveTabId}
//       />
//       {filteredItems.map((item) =>
//         item.map((menuItem) => (
//           <TabPanel
//             key={menuItem.id}
//             title={menuItem.title}
//             description={menuItem.description}
//             price={menuItem.price}
//             image={menuItem.image}
//           />
//         ))
//       )}
//     </div>
