import React from "react";
import classes from "./AboutText.module.scss";
import { Text } from "../../index";

function AboutText() {
  return (
    <Text>
      <Text.Title>
        <Text.SmallTitle>
          <Text.Icon className="fas fa-coffee primary-color" />
          About Us
        </Text.SmallTitle>
        <Text.BigTitle>THERE IS ALL ABOUT CAFENOD COFFEE HOUSE</Text.BigTitle>
      </Text.Title>
      <Text.Paragraph>
        From a cultural standpoint, coffeehouses largely serve as centers of
        social interaction: the coffeehouse provides patrons with a place to
        congregate, talk, read, write, entertain one another, or pass the time,
        whether individually or in small groups.
      </Text.Paragraph>
      <ul className={classes.Info}>
        <li className={classes.InfoItem}>
          <Text.SmallTitle>
            <Text.Icon className="far fa-square" />
            THERE IS ALL ABOUT OUR CAFENOD COFFEE SHOPS
          </Text.SmallTitle>
          <Text.Paragraph>
            The coffee is brewed by first roasting the green coffee beans over
            hot coals in a brazier. Once the beans are roasted each participant
            is given an opportunity to sample
          </Text.Paragraph>
        </li>
        <li className={classes.InfoItem}>
          <Text.SmallTitle>
            <Text.Icon className="far fa-square" />
            THERE IS ALL ABOUT OUR CAFENOD COFFEE SHOPS
          </Text.SmallTitle>
          <Text.Paragraph>
            The coffee is brewed by first roasting the green coffee beans over
            hot coals in a brazier. Once the beans are roasted each participant
            is given an opportunity to sample
          </Text.Paragraph>
        </li>
      </ul>
    </Text>
  );
}

export default AboutText;
