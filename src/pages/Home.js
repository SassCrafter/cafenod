import React from "react";
import {
  Hero,
  Features,
  About,
  Menu,
  Offer,
  Testimonials,
  PopularProducts,
} from "../components";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Menu />
      <Offer />
      <Testimonials />
      <PopularProducts />
    </>
  );
}

export default Home;
