import React from "react";
import classes from "./OfferMain.module.scss";
import { Flex, Text, BigImage } from "../../../index";

function OfferMain() {
  return (
    <Flex>
      <Flex.Row flexDirection="rowReverse" className={classes.Container}>
        <Flex.Column className={classes.ImageContainer}>
          <BigImage src="/images/offer/coffee.png" alt="coffee offer" />
        </Flex.Column>
        <Flex.Column className={classes.TextContainer}>
          <Text>
            <Text.Title>
              <Text.SmallTitle>
                <Text.Icon className="fas fa-coffee primary-color" />
                What We Offer
              </Text.SmallTitle>
              <Text.BigTitle>Divine aroma in every single cup</Text.BigTitle>
            </Text.Title>
            <Text.Paragraph>
              From a cultural standpoint, coffeehouses largely serve as centers
              of social interaction: the coffeehouse provides patrons with a
              place to congregate, talk, read, write, entertain one another, or
              pass the time, whether individually or in small groups.
            </Text.Paragraph>
            <Text.Paragraph>
              From a cultural standpoint, coffeehouses largely serve as centers
              of social interaction: the coffeehouse provides patrons with a
              place to congregate, talk, read, write, entertain one another, or
              pass the time, whether individually or in small groups.
            </Text.Paragraph>
          </Text>
        </Flex.Column>
      </Flex.Row>
    </Flex>
  );
}

export default OfferMain;
