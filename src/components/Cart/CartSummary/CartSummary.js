import React from "react";
import classes from "./CartSummary.module.scss";
import { Button } from "../../index";
import { CHECKOUT as CheckoutRoute } from "../../../constants/routes";

function CartSummary({ totalPrice, onGoToCheckout }) {
  return (
    <div className={classes.Container}>
      <div className={classes.Top}>
        <h4 className={classes.Total}>Total: </h4>
        <h4 className={classes.Total}>${totalPrice.toFixed(2)}</h4>
      </div>
      <div className={classes.Btns}>
        <Button outline className={classes.OutlineBtn}>
          Coupon
        </Button>
        <Button btnType="link" to={CheckoutRoute} onClick={onGoToCheckout}>
          Checkout
        </Button>
      </div>
    </div>
  );
}

export default CartSummary;
