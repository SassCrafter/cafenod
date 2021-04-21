import React from "react";
import classes from "./TestimonialsSlide.module.scss";
import { Flex, Text, BigImage } from "../../index";

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
	let starRatings = [];
	for (let i = 1; i < 6; i++) {
		if (i <= rating) {
			starRatings.push(<i className="fas fa-star"></i>);
		} else {
			starRatings.push(<i className="far fa-star"></i>);
		}
	}
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
								<Text.Icon
									className={`${icon} primary-color`}
								/>
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
						<div className={classes.Rating}>
							<ul>
								{starRatings.map((item) => (
									<li>{item}</li>
								))}
							</ul>
						</div>
					</div>
				</Flex.Column>
			</Flex.Row>
		</Flex>
	);
}

export default TestimonialsSlide;
