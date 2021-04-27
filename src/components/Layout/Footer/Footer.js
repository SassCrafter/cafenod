import React from "react";
import classes from "./Footer.module.scss";
import { Section, Text, Subscribe } from "../../index";
import FooterContent from "./FooterContent/FooterContent";

function Footer() {
  return (
    <Section className={classes.Container} data-aos="fade-up">
      <div className="relative">
        <Text data-aos="fade-up">
          <Text.Title textAlign="center" color="white">
            <Text.BigTitle>COFFEE BUILDS YOUR FRESH MIND</Text.BigTitle>
          </Text.Title>
        </Text>
        <Subscribe data-aos="fade-up" />
        <FooterContent />
      </div>
    </Section>
  );
}

export default Footer;
