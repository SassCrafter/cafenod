import React from "react";
import PopularProductsData from "../../../fixtures/popularProductsData.json";
import { Products, Section, Text } from "../../index";

function PopularProducts() {
  return (
    <Section className="bg-gray" data-aos="fade-up">
      <Text>
        <Text.Title>
          <Text.SmallTitle>
            <Text.Icon className={`primary-color fas fa-coffee`} />
            SPECIAL ONLINE SHOP
          </Text.SmallTitle>
          <Text.BigTitle>OUR POPULAR PRODUCTS</Text.BigTitle>
        </Text.Title>
      </Text>
      <Products items={PopularProductsData} />
    </Section>
  );
}

export default PopularProducts;
