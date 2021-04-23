import React from "react";
import classes from "./CartSummary.module.scss";
import { Button } from "../../index";
import { CHECKOUT as CheckoutRoute } from "../../../constants/routes";

function CartSummary({ totalPrice }) {
  return (
    <div className={classes.Container}>
      <div className={classes.Top}>
        <Button outline className={classes.OutlineBtn}>
          Voucher Code
        </Button>
        <h4 className={classes.Total}>Total: ${totalPrice.toFixed(2)}</h4>
      </div>
      <Button btnType="link" to={CheckoutRoute} fullWidth maxWidth="20rem">
        Checkout
      </Button>
    </div>
  );
}

export default CartSummary;
