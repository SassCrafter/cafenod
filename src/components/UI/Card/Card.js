import React from "react";
import classes from "./Card.module.scss";

function Card({ children, className, ...restProps }) {
	return (
		<div className={`${classes.Card} ${className}`} {...restProps}>
			{children}
		</div>
	);
}

export default Card;
