import React from "react";
import classes from "./CartItem.module.scss";
import { BigImage } from "../../index";

function CartItem({
  id,
  image,
  alt,
  name,
  price,
  amount,
  onAddItem,
  onRemoveItem,
}) {
  const addItemHandler = () => {
    const item = {
      id,
      image,
      name,
      price,
      amount: 1,
    };
    onAddItem(item);
  };

  const removeItemHandler = () => {
    onRemoveItem(id);
  };
  return (
    <li className={classes.Container}>
      <div className={classes.Left}>
        <BigImage src={image} alt={alt} className={classes.Image} />
        <div className={classes.Info}>
          <h3 className={classes.Name}>{name}</h3>
          <h4 className={classes.Price}>${price.toFixed(2)}</h4>
        </div>
      </div>
      <div className={classes.Action}>
        <button className={classes.Btn} onClick={removeItemHandler}>
          -
        </button>
        <span className={classes.Amount}>{amount}</span>
        <button className={classes.Btn} onClick={addItemHandler}>
          +
        </button>
      </div>
    </li>
  );
}

export default CartItem;
