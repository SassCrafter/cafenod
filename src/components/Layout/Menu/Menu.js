import React, { useState } from "react";
import classes from "./Menu.module.scss";
import { Section, Text, Deco, Tabs } from "../../index";
import MenuItem from "./MenuItem/MenuItem";
import CategoriesData from "../../../fixtures/menuCategories.json";
import MenuItemsData from "../../../fixtures/menuItems.json";
import { PRODUCT } from "../../../constants/routes";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");

  const renderItems = (items) => {
    console.log(items);
    const itemsList = items.map((menuItem) => {
      return menuItem.items.map((item) => {
        return (
          <MenuItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
            linkTo={PRODUCT}
            className={menuItem.className}
          />
        );
      });
    });
    return itemsList;
  };

  const showItemsByCategory = (activePanelId, visibleClass, hiddenClass) => {
    let filteredItems = [];
    const activeCategoryIdx = CategoriesData.findIndex(
      (el) => el.id === activePanelId
    );
    const activeCategory = CategoriesData[activeCategoryIdx].category;
    if (activeCategory === "all") {
      filteredItems = MenuItemsData;
    } else {
      filteredItems = MenuItemsData.filter(
        (item) => item.category === activeCategory
      );
    }
    console.log(filteredItems);
    return filteredItems;
  };

  return (
    <Section className={`bg-gray relative ${classes.Menu}`}>
      <Deco
        imgPath="/images/menu/deco/deco_01.png"
        imgAlt="cup of coffee"
        top="55px"
        className={classes.Coffee}
      />
      <Deco
        imgPath="/images/menu/deco/deco_02.png"
        imgAlt="house"
        top="auto"
        left="auto"
        right="0"
        bottom="0"
        className={classes.House}
      />
      <div className="z-index" data-aos="fade-up">
        <Text>
          <Text.Title textAlign="center">
            <Text.SmallTitle>
              <Text.Icon className="fas fa-coffee primary-color" />
              Our Special Menu
            </Text.SmallTitle>
            <Text.BigTitle>CAFENOD COFFEE HOUSE</Text.BigTitle>
          </Text.Title>
        </Text>
        <Tabs
          tabItems={CategoriesData}
          tabTextName="category"
          panelItems={MenuItemsData}
          renderPanels={renderItems}
          showPanelsHandler={showItemsByCategory}
        />
      </div>
    </Section>
  );
}

export default Menu;
