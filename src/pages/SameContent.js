import React, { useState } from "react";
import { Header, Cart, Footer } from "../components/index";

function SameContent({ children }) {
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
      {children}
      <Footer />
    </>
  );
}

export default SameContent;
