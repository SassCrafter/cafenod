import React from "react";
import classes from "./CartTop.module.scss";

function CartTop({ itemsAmount, onCloseBtnClick, onReset }) {
  return (
    <div className={classes.Container}>
      <header className={classes.Header}>
        <div className={classes.CloseBtn}>
          <button onClick={onCloseBtnClick}>
            <i className="fas fa-chevron-left"></i>
          </button>
        </div>
        <h4 className={classes.Title}>Shopping Cart</h4>
        <div></div>
      </header>
      <div className={classes.Actions}>
        <h3 className={classes.BigTitle}>
          Cart Items -{" "}
          <span className={classes.TotalAmount}>{itemsAmount}</span>
        </h3>
        <button onClick={onReset}>Remove All</button>
      </div>
    </div>
  );
}

export default CartTop;
