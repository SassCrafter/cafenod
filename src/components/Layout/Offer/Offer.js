import React from "react";
import classes from "./Offer.module.scss";
import {
  Section,
  Flex,
  BigImage,
  Card,
  OpeningHours,
  ContactInfo,
  Button,
} from "../../index";
import OfferMain from "./OfferMain/OfferMain";
import OfferInfo from "./OfferInfo/OfferInfo";
import { CONTACT } from "../../../constants/routes";

function Offer() {
  return (
    <Section container={false} className={classes.Offer}>
      <Flex>
        <Flex.Row className={classes.RowContainer}>
          <Flex.Column className={classes.ImageContainer}>
            <BigImage
              src="/images/offer/video-cover.jpg"
              alt="video"
              className={classes.VideoCover}
            >
              <div className={classes.VideoPlay}>
                <span className={classes.VideoPlayIcon}>
                  <i className="fas fa-play"></i>
                  <span className={classes.Pulse}></span>
                </span>
                <h4>Play Video</h4>
              </div>
            </BigImage>
          </Flex.Column>
          <Flex.Column className={classes.TextContainer}>
            <OfferMain />
            <div className={classes.Offers}>
              <OfferInfo
                className={`${classes.OfferItem} bg-gray color-dark color-dark`}
                title="Table Reservation..."
                titleIcon="fas fa-heart"
              >
                <ContactInfo />
                <Button
                  btnType="link"
                  to={CONTACT}
                  style={{ marginTop: "2rem" }}
                >
                  Contact Us
                </Button>
              </OfferInfo>
              <OfferInfo
                className={`${classes.OfferItem} bg-dark`}
                title="Opening Hours..."
                titleIcon="fas fa-clock"
              >
                <OpeningHours />
              </OfferInfo>
              <OfferInfo
                className={`${classes.OfferItem} ${classes.OfferItemImage} bg-gray`}
                title="Friday Offer..."
                titleIcon="fas fa-gift"
              >
                <BigImage src="/images/offer/sale.png" alt="-20%" />
              </OfferInfo>
            </div>
          </Flex.Column>
        </Flex.Row>
      </Flex>
    </Section>
  );
}

export default Offer;
