import React from "react";
import classes from "./Footer.module.scss";
import { Section, Text, Subscribe } from "../../index";

function Footer() {
  return (
    <Section className={classes.Container}>
      <div className="relative">
        <Text>
          <Text.Title textAlign="center" color="white">
            <Text.BigTitle>COFFEE BUILDS YOUR FRESH MIND</Text.BigTitle>
          </Text.Title>
        </Text>
        <Subscribe />
      </div>
    </Section>
  );
}

export default Footer;
