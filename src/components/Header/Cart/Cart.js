import React, { useContext } from "react";
import classes from "./Cart.module.scss";
import CartContext from "../../../store/cart/cart-context";

function Cart({ onClick }) {
	const { items } = useContext(CartContext);
	const totalItems = items.reduce((total, next) => {
		return total + next.amount;
	}, 0);
	return (
		<div className={classes.Cart} onClick={onClick}>
			<i className="fas fa-shopping-bag"></i>
			<span className={classes.Counter}>{totalItems}</span>
		</div>
	);
}

export default Cart;
