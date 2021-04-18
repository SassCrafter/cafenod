import React from "react";
import classes from "./Offer.module.scss";
import { Section, Flex, BigImage, Card } from "../index";
import OfferMain from "./OfferMain/OfferMain";

function Offer() {
	return (
		<Section>
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
					</Flex.Column>
				</Flex.Row>
			</Flex>
		</Section>
	);
}

export default Offer;
