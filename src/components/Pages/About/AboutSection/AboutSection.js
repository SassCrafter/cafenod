import React from "react";
import classes from "./AboutSection.module.scss";
import {
  Section,
  Flex,
  Text,
  BigImage,
  Deco,
  Chip,
  LineContent,
  Features,
} from "../../../index";
import { ABOUT } from "../../../../constants/routes";

function AboutSection() {
  return (
    <Section>
      <Flex className={classes.Top}>
        <Flex.Row flexDirection="rowReverse">
          <Flex.Column data-aos="fade-up">
            <div className={classes.Image}>
              <BigImage src="/images/pages/about/field.png" />
              <Deco
                imgPath="/images/misc/leaf.png"
                imgAlt="leaf"
                className={classes.Leaf}
              />
              <h3 className={classes.FloatingText}>
                SINCE...
                <strong>1996</strong>
              </h3>
            </div>
          </Flex.Column>
          <Flex.Column data-aos="fade-up">
            <Text>
              <Text.Title>
                <Text.SmallTitle>
                  <Text.Icon className="fas fa-coffee primary-color" />
                  About Us
                </Text.SmallTitle>
                <Text.BigTitle>27 Years Of Experience</Text.BigTitle>
              </Text.Title>
              <Text.Paragraph>
                From a cultural standpoint, coffeehouses largely serve as
                centers of social interaction: the coffeehouse provides patrons
                with a place to congregate, talk, read, write, entertain one
                another, or pass the time, whether individually or in small
                groups.
              </Text.Paragraph>
              <Text.List>
                <Text.ListItem>
                  <Text.SmallTitle>
                    THERE IS ALL ABOUT OUR CAFENOD COFFEE SHOPS
                  </Text.SmallTitle>
                  <Text.Paragraph>
                    The coffee is brewed by first roasting the green coffee
                    beans over hot coals in a brazier. Once the beans are
                    roasted each participant is given an opportunity to sample
                  </Text.Paragraph>
                </Text.ListItem>
                <Text.ListItem>
                  <Text.SmallTitle>
                    THIS IS FOLLOWED BY THE GRINDING
                  </Text.SmallTitle>
                  <Text.Paragraph>
                    The coffee is brewed by first roasting the green coffee
                    beans over hot coals in a brazier. Once the beans are
                    roasted each participant is given an opportunity to sample
                  </Text.Paragraph>
                </Text.ListItem>
              </Text.List>
            </Text>
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
      <LineContent
        title="HISTORY OF OUR CAFENOD COFFEE HOUSE"
        icon="/images/misc/icon-coffee.png"
        text="The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier. Once the beans are roasted each participant is given an opportunity to sample The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier."
        data-aos="fade-up"
      />
      <Features />
    </Section>
  );
}

export default AboutSection;
