import React from "react";
import classes from "./FooterContent.module.scss";
import FooterItem from "../FooterItem/FooterItem";
import { Logo, SM, Address, OpeningHours } from "../../../index";
import SmData from "../../../../fixtures/SmData.json";

function FooterContent() {
  return (
    <div className={classes.Content}>
      <FooterItem>
        <Logo />
        <p className={classes.Text}>
          Rorem ipsum dolorconsectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniaminventore veritatis et.orem ipsum dolorconsectetur adipisicing
          elit, sed do eiusmod tempor incididunt aneye.
        </p>
        <SM items={SmData} />
      </FooterItem>
      <FooterItem title="Contact Us">
        <Address />
      </FooterItem>
      <FooterItem title="Opening Hours">
        <OpeningHours className={classes.Hours} />
      </FooterItem>
    </div>
  );
}

export default FooterContent;
