import React from "react";
import classes from "./CheckoutContainer.module.scss";
import { Section } from "../../../index";

function CheckoutContainer({ children, className }) {
	return (
		<Section
			container={false}
			className={`bg-grayish ${classes.Container}`}
		>
			<div className={classes.Bg}>
				<div className="container">{children}</div>
			</div>
		</Section>
	);
}

export default CheckoutContainer;
