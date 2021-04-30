import React from "react";
import Product from "./Product/Product";
import classes from "./Products.module.scss";

function Products({ items }) {
  return (
    <ul className={classes.List}>
      {items.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          alt={item.name}
          price={item.price}
        />
      ))}
    </ul>
  );
}

export default Products;
