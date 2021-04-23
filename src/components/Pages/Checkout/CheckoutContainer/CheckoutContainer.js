import React from "react";
import classes from "./CheckoutContainer.module.scss";
import { Section } from "../../../index";

function CheckoutContainer({ children, className }) {
	return (
		<Section className={`bg-gray ${classes.Container}`}>{children}</Section>
	);
}

export default CheckoutContainer;
