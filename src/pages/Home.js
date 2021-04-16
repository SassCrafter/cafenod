import React from "react";
import { Hero, Features, About, Menu } from "../components";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Menu />
      {/* <section style={{ height: "100vh" }}></section> */}
    </>
  );
}

export default Home;
