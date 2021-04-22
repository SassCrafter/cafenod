import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
	items: [],
	totalPrice: 0,
};

const cartReducer = (state, action) => {
	if (action.type === "ADD_ITEM") {
		console.log("ADDING To Cart");
		const updatedTotalPrice = state.totalPrice + action.item.price;

		const existingCartItemIndex = state.items.findIndex((item) => {
			return item.id === action.item.id;
		});
		const existingCartItem = state.items[existingCartItemIndex];
		let updatedItems = [];

		if (existingCartItem) {
			console.log(existingCartItem);
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.item.amount,
			};
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			updatedItems = [...state.items].concat(action.item);
		}

		return {
			items: updatedItems,
			totalPrice: updatedTotalPrice,
		};
	}
	return defaultCartState;
};

function CartProvider({ children }) {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);

	const addItem = (item) => {
		dispatchCartAction({
			type: "ADD_ITEM",
			item,
		});
	};

	const cartContext = {
		items: cartState.items,
		totalPrice: cartState.totalPrice,
		addItem,
	};
	return (
		<CartContext.Provider value={cartContext}>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;
