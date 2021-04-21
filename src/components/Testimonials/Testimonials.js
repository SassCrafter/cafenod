import React from "react";
import classes from "./Testimonials.module.scss";
import TestimonialsSlide from "./TestimonialsSlide/TestimonialsSlide";
import { Section, Deco } from "../index";
import TestimonialsData from "../../fixtures/testimonialsData.json";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";

function Testimonials() {
	return (
		<Section className={classes.Container}>
			<Swiper grabCursor spaceBetween={50}>
				{TestimonialsData?.map((item) => (
					<SwiperSlide key={item.id}>
						<TestimonialsSlide
							image={item.image}
							smallTitle={item.smallTitle}
							icon={item.icon}
							bigTitle={item.bigTitle}
							text={item.text}
							name={item.name}
							position={item.position}
							rating={item.rating}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</Section>
	);
}

export default Testimonials;
