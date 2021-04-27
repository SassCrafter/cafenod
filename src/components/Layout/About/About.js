import React from "react";
import classes from "./About.module.scss";
import AboutText from "./AboutText/AboutText";
import {
  Section,
  Flex,
  BigImage,
  Button,
  Chip,
  SmallOverlay,
} from "../../index";
import { ABOUT } from "../../../constants/routes";

function About() {
  return (
    <Section>
      <Flex>
        <Flex.Row flexDirection="rowReverse">
          <Flex.Column data-aos="fade-up">
            <BigImage
              src="/images/about/img_01.png"
              alt="about"
              style={{ position: "relative" }}
            >
              <SmallOverlay>
                <div className={classes.OverlayText}>
                  <h4>
                    <span>27</span> +years of
                  </h4>
                  <strong>EXPERIENCE</strong>
                </div>
              </SmallOverlay>
            </BigImage>
          </Flex.Column>
          <Flex.Column data-aos="fade-up">
            <AboutText />

            <Chip
              title="RASALINA DE WILLAMSON"
              subtitle="FOUNDER & CO"
              imgPath="/images/about/person.png"
              imgAlt="Rasalina De Willamson"
              btnTo={ABOUT}
            />
          </Flex.Column>
        </Flex.Row>
      </Flex>
    </Section>
  );
}

export default About;
