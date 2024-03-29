import React, { useContext } from "react";
import classes from "./Product.module.scss";
import { Card, BigImage, Button } from "../../../index";
import { Link } from "react-router-dom";
import CartContext from "../../../../store/cart/cart-context";
import { PRODUCT } from "../../../../constants/routes";

function Product({ id, image, alt, name, price }) {
  const { addItem } = useContext(CartContext);

  const addProductToCart = () => {
    const item = {
      id,
      name,
      image,
      price,
      amount: 1,
    };
    addItem(item);
  };

  const linkTo = {
    pathname: PRODUCT,
    id,
    image,
    name,
    price,
  };

  return (
    <Card className={classes.Container} data-aos="fade-up">
      <Link to={linkTo}>
        <div className={classes.Cover}>
          <BigImage className={classes.Image} src={image} alt={alt} />
        </div>
      </Link>
      <div className={classes.Info}>
        <h4 className={classes.Name}>{name}</h4>

        <div className={classes.Action}>
          <h5 className={classes.Price}>${price.toFixed(2)}</h5>
          <Button className={classes.Btn} outline onClick={addProductToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default Product;
