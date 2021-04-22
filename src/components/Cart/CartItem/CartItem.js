import React from "react";
import classes from "./CartItem.module.scss";
import { BigImage } from "../../index";

function CartItem({ image, alt, name, price }) {
	return (
		<li className={classes.Container}>
			<BigImage src={image} alt={alt} className={classes.Image} />
			<div className={classes.Info}>
				<h3 className={classes.Name}>{name}</h3>
				<h4 className={classes.Price}>{price}</h4>
			</div>
		</li>
	);
}

export default CartItem;
