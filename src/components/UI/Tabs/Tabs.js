import React, { useState } from "react";
import classes from "./Tabs.module.scss";
import TabList from "./TabList/TabList";
import { act } from "react-dom/test-utils";

function Tabs({ items }) {
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <div className={classes.Container}>
      <TabList
        items={items}
        activeTabId={activeTabId}
        setActiveTabId={setActiveTabId}
      />
    </div>
  );
}

export default Tabs;
