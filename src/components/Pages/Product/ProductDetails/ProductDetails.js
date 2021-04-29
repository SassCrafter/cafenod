import React, { useState, useContext } from "react";
import classes from "./ProductDetails.module.scss";
import { Rating, NumberInput, Button } from "../../../index";
import CartContext from "../../../../store/cart/cart-context";

function ProductDetails({ id, image, name, price }) {
  const { addItem } = useContext(CartContext);
  const [amount, setAmount] = useState(0);

  const addToCartHandler = () => {
    if (amount === 0) return;
    const item = {
      id,
      image,
      name,
      price,
      amount,
    };
    addItem(item);
    setAmount(0);
  };

  return (
    <>
      <h4 className={classes.Title}>{name}</h4>
      <Rating rating={4} className={classes.Rating} />
      <p className={classes.Description}>
        The coffee is brewed by first roasting the green coffee beans over hot
        coals in brazier.Once the beans are roasted each participant is given an
        opportunity to sample The coffee is brewed by first roasting the green
        coffee beans over hot coals in a brazier.
      </p>
      <div className={classes.Price}>
        <h5>${price?.toFixed(2)}</h5>
        <small>
          <i className="fas fa-check"></i>In stock
        </small>
      </div>
      <div className={classes.AddProduct}>
        <NumberInput
          label="Quantity"
          id="productQuantity"
          amount={amount}
          updateAmount={setAmount}
          step="1"
          min="0"
        />
        <Button onClick={addToCartHandler}>Add to Cart</Button>
      </div>
    </>
  );
}

export default ProductDetails;
