import React from "react";
import { Section } from "../../index";
import Feature from "./Feature/Feature";
import FeaturesData from "../../../fixtures/featuresData.json";
import classes from "./Features.module.scss";

function Features() {
  return (
    <Section>
      <div className={classes.Features}>
        {FeaturesData.map((item, idx) => (
          <Feature
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            counter={idx + 1}
          />
        ))}
      </div>
    </Section>
  );
}

export default Features;
