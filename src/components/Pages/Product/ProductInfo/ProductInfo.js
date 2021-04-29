import React from "react";
import classes from "./ProductInfo.module.scss";
import ProductGallery from "../ProductGallery/ProductGallery";
import ProductDetails from "../ProductDetails/ProductDetails";
import ProductDescription from "../ProductDescription/ProductDescription";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import { Section, Flex } from "../../../index";

function ProductInfo({ id, image, name, price }) {
  return (
    <Section className="bg-grayish">
      <Flex>
        <Flex.Row>
          <Flex.Column>
            <ProductGallery image={image} />
          </Flex.Column>
          <Flex.Column>
            <ProductDetails image={image} price={price} name={name} id={id} />
          </Flex.Column>
        </Flex.Row>
      </Flex>
      <ProductDescription />
      {/*<RelatedProducts />*/}
    </Section>
  );
}

export default ProductInfo;
