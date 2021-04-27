import React from "react";
import { PageHero, Testimonials } from "../components";
import { AboutSection } from "../components/Pages/About";

function About() {
  return (
    <main>
      <PageHero bg="/images/pages/checkout/hero-bg.jpg" title="About US" />
      <AboutSection />
      <Testimonials bgFull />
    </main>
  );
}

export default About;
