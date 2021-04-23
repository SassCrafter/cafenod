import React from "react";
import classes from "./CartItemsList.module.scss";
import CartItem from "../CartItem/CartItem";

function CartItemsList({ items, onAddItem, onRemoveItem }) {
  return (
    <ul className={classes.List}>
      {items.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            image={item.image}
            alt={item.name}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAddItem={onAddItem}
            onRemoveItem={onRemoveItem}
          />
        );
      })}
    </ul>
  );
}

export default CartItemsList;
