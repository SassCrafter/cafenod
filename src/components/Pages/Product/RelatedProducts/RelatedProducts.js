import React from "react";
import { Products } from "../../../index";
import PopularProductsData from "../../../../fixtures/popularProductsData.json";

function RelatedProducts() {
  const relatedProducts = PopularProductsData.slice(0, 3);
  console.log(relatedProducts);
  return <Products items={relatedProducts} />;
}

export default RelatedProducts;
