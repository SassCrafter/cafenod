import React from "react";
import classes from "./TestimonialsSlide.module.scss";
import { Flex, Text, BigImage, Rating } from "../../../index";

function TestimonialsSlide({
  image,
  smallTitle,
  icon,
  bigTitle,
  text,
  name,
  position,
  rating,
}) {
  return (
    <Flex>
      <Flex.Row>
        <Flex.Column>
          <BigImage src={image} alt={name} />
        </Flex.Column>
        <Flex.Column alignSelf="center">
          <Text>
            <Text.Title>
              <Text.SmallTitle>
                <Text.Icon className={`${icon} primary-color`} />
                {smallTitle}
              </Text.SmallTitle>
              <Text.BigTitle>{bigTitle}</Text.BigTitle>
            </Text.Title>
            <Text.Paragraph>{text}</Text.Paragraph>
          </Text>
          <div className={classes.Person}>
            <div className={classes.Info}>
              <h3 className={classes.Name}>{name}</h3>
              <h4 className={classes.Position}>{position}</h4>
            </div>
            <Rating rating={rating} />
          </div>
        </Flex.Column>
      </Flex.Row>
    </Flex>
  );
}

export default TestimonialsSlide;
