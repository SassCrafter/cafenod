import React from "react";
import classes from "./Products.module.scss";
import { Section, Text } from "../../index";
import ProductsList from "./ProductsList/ProductsList";

function PopularProducts() {
  return (
    <Section className={`bg-gray ${classes.Products}`} data-aos="fade-up">
      <Text>
        <Text.Title>
          <Text.SmallTitle>
            <Text.Icon className={`primary-color fas fa-coffee`} />
            SPECIAL ONLINE SHOP
          </Text.SmallTitle>
          <Text.BigTitle>OUR POPULAR PRODUCTS</Text.BigTitle>
        </Text.Title>
      </Text>
      <ProductsList />
    </Section>
  );
}

export default PopularProducts;
