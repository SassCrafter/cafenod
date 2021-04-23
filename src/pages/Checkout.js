import React from "react";
import { PageHero } from "../components/index";
import { CheckoutContainer } from "../components/Pages/";
function Checkout() {
	return (
		<main>
			<PageHero bg="/images/pages/checkout/hero-bg.jpg" />
			<CheckoutContainer>Checkout</CheckoutContainer>
		</main>
	);
}

export default Checkout;
