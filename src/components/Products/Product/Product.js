import React from "react";
import classes from "./Product.module.scss";
import { Card, BigImage, Button } from "../../index";
import { Link } from "react-router-dom";

function Product({ image, alt, name, price }) {
	return (
		<Card className={classes.Container}>
			<div className={classes.Cover}>
				<BigImage className={classes.Image} src={image} alt={alt} />
			</div>
			<div className={classes.Info}>
				<Link to="/Product" className={classes.Name}>
					<h4>{name}</h4>
				</Link>
				<div className={classes.Action}>
					<h5 className={classes.Price}>${price.toFixed(2)}</h5>
					<Button className={classes.Btn} outline>
						Add to Cart
					</Button>
				</div>
			</div>
		</Card>
	);
}

export default Product;
