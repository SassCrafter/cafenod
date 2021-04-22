import React from "react";
import classes from "./CartItemsList.module.scss";
import CartItem from "../CartItem/CartItem";

function CartItemsList({ items }) {
	return (
		<ul className={classes.List}>
			{items.map((item) => {
				<CartItem
					key={item.id}
					image={item.image}
					alt={item.name}
					name={item.name}
					price={item.price}
				/>;
			})}
		</ul>
	);
}

export default CartItemsList;
