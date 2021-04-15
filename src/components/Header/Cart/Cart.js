import React from "react";
import classes from "./Cart.module.scss";

function Cart() {
  return (
    <div className={classes.Cart}>
      <i className="fas fa-shopping-bag"></i>
      <span className={classes.Counter}>0</span>
    </div>
  );
}

export default Cart;
