import React from "react";
import { PageHero } from "../components/index";
import { CheckoutContainer, CheckoutForm } from "../components/Pages/";
function Checkout() {
	return (
		<main>
			<PageHero bg="/images/pages/checkout/hero-bg.jpg" />
			<CheckoutContainer>
				<CheckoutForm />
			</CheckoutContainer>
		</main>
	);
}

export default Checkout;
