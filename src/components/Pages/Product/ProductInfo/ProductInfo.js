import React from "react";
import classes from "./ProductInfo.module.scss";
import ProductGallery from "../ProductGallery/ProductGallery";
import ProductDetails from "../ProductDetails/ProductDetails";
import { Section, Flex } from "../../../index";

function ProductInfo() {
  return (
    <Section className="bg-grayish">
      <Flex>
        <Flex.Row>
          <Flex.Column>
            <ProductGallery />
          </Flex.Column>
          <Flex.Column>
            <ProductDetails />
          </Flex.Column>
        </Flex.Row>
      </Flex>
    </Section>
  );
}

export default ProductInfo;
