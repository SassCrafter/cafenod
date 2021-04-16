import React from "react";
import classes from "./Menu.module.scss";
import { Section, Text, Deco, Tabs } from "../index";
import CategoriesData from "../../fixtures/menuCategories.json";

function Menu() {
  return (
    <Section className="bg-gray relative">
      <Deco
        imgPath="/images/menu/deco/deco_01.png"
        imgAlt="cup of coffee"
        top="135px"
      />
      <div className="z-index">
        <Text>
          <Text.Title textAlign="center">
            <Text.SmallTitle>
              <Text.Icon className="fas fa-coffee primary-color" />
              Our Special Menu
            </Text.SmallTitle>
            <Text.BigTitle>CAFENOD COFFEE HOUSE</Text.BigTitle>
          </Text.Title>
        </Text>
        <Tabs items={CategoriesData} />
      </div>
    </Section>
  );
}

export default Menu;
