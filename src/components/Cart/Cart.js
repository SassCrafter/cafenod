import React, { useContext } from "react";
import classes from "./Cart.module.scss";
import { Backdrop } from "../index";
import CartTop from "./CartTop/CartTop";
import CartItemsList from "./CartItemsList/CartItemsList";
import CartSummary from "./CartSummary/CartSummary";
import CartContext from "../../store/cart/cart-context";

function Cart({ open, onCloseCart }) {
  const {
    items,
    totalPrice,
    totalAmount,
    addItem,
    removeItem,
    reset,
  } = useContext(CartContext);
  return (
    <>
      <Backdrop visible={open} onClick={onCloseCart} className="cursor-close" />
      <div className={`${classes.Container} ${open ? classes.Open : ""}`}>
        <div className={classes.Top}>
          <CartTop
            itemsAmount={totalAmount}
            onCloseBtnClick={onCloseCart}
            onReset={reset}
          />
          <CartItemsList
            items={items}
            onAddItem={addItem}
            onRemoveItem={removeItem}
          />
        </div>
        <CartSummary totalPrice={totalPrice} onGoToCheckout={onCloseCart} />
      </div>
    </>
  );
}

export default Cart;
