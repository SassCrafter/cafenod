import React, { useState } from "react";
import { Header, Cart } from "../components/index";

function SameContent() {
	const [isCartVisible, setIsCartVisible] = useState(false);

	const openCart = () => {
		setIsCartVisible(true);
	};

	const closeCart = () => {
		setIsCartVisible(false);
	};

	return (
		<>
			<Header onCartButtonClick={openCart} />
			<Cart open={isCartVisible} onCloseCart={closeCart} />
		</>
	);
}

export default SameContent;
