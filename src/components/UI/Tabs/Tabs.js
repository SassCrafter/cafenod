import React, { useState } from "react";
import classes from "./Tabs.module.scss";
import TabList from "./TabList/TabList";
import TabPanelList from "./TabPanelList/TabPanelList";

function Tabs({
  tabItems,
  tabListClass,
  tabTextName,
  panelItems,
  renderPanels,
  showPanelsHandler,
}) {
  const [activeTabId, setActiveTabId] = useState(0);
  const [activePanelId, setActivePanelId] = useState(0);

  return (
    <div className={classes.Container}>
      <TabList
        items={tabItems}
        activeTabId={activeTabId}
        setActiveTabId={setActiveTabId}
        setActivePanelId={setActivePanelId}
        tabTextName={tabTextName}
        className={tabListClass}
      />
      {showPanelsHandler ? (
        <TabPanelList>
          {renderPanels(
            showPanelsHandler(activePanelId, classes.Visible, classes.Hidden)
          )}
        </TabPanelList>
      ) : (
        <TabPanelList>{renderPanels(activePanelId)}</TabPanelList>
      )}
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
