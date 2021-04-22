import React, { useContext } from "react";
import classes from "./Cart.module.scss";
import { Backdrop } from "../index";
import CartTop from "./CartTop/CartTop";
import CartItemsList from "./CartItemsList/CartItemsList";
import CartContext from "../../store/cart/cart-context";

function Cart({ open, onCloseCart }) {
	const { items, totalAmount } = useContext(CartContext);

	return (
		<>
			<Backdrop
				visible={open}
				onClick={onCloseCart}
				className="cursor-close"
			/>
			<div className={`${classes.Container} ${open ? classes.Open : ""}`}>
				<CartTop itemsAmount={totalAmount} />
				<CartItemsList items={items} />
			</div>
		</>
	);
}

export default Cart;
