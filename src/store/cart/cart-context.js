import { createContext } from "react";

const CartContext = createContext({
	items: [],
	totalPrice: 0,
	addItem: (item) => {},
	deleteItem: (id) => {},
});

export default CartContext;
