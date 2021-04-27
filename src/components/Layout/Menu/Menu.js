import React from "react";
import classes from "./Menu.module.scss";
import { Section, Text, Deco, Tabs } from "../../index";
import CategoriesData from "../../../fixtures/menuCategories.json";

function Menu() {
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
        <Tabs items={CategoriesData} />
      </div>
    </Section>
  );
}

export default Menu;
