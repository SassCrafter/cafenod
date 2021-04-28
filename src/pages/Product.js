import React from "react";
import { PageHero } from "../components/";
import { ProductInfo } from "../components/Pages/Product/index";

function Product() {
  return (
    <>
      <PageHero
        bg="/images/pages/checkout/hero-bg.jpg"
        title="Product Details"
      />
      <main>
        <ProductInfo />
      </main>
    </>
  );
}

export default Product;
