import React from "react";
import classes from "./CartTop.module.scss";

function CartTop({ itemsAmount }) {
	console.log(itemsAmount);
	return (
		<div className={classes.Container}>
			<h4 className={classes.Title}>
				Cart Items -<span className="primary-color">{itemsAmount}</span>
			</h4>
		</div>
	);
}

export default CartTop;
