import React from "react";
import {
	Hero,
	Features,
	About,
	Menu,
	Offer,
	Testimonials,
	Products,
} from "../components";

function Home() {
	return (
		<>
			<Hero />
			<Features />
			<About />
			<Menu />
			<Offer />
			<Testimonials />
			<Products />
		</>
	);
}

export default Home;
