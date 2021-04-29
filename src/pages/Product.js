import React from "react";
import { PageHero } from "../components/";
import { ProductInfo } from "../components/Pages/Product/index";
import { useLocation } from "react-router-dom";

function Product() {
  const location = useLocation();
  const { id, name, price, image } = location;
  return (
    <>
      <PageHero
        bg="/images/pages/checkout/hero-bg.jpg"
        title="Product Details"
      />
      <main>
        <ProductInfo id={id} name={name} price={price} image={image} />
      </main>
    </>
  );
}

export default Product;
