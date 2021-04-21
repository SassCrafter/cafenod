import React from "react";
import classes from "./ProductsList.module.scss";
import Product from "../Product/Product";
import PopularProductsData from "../../../fixtures/popularProductsData.json";

function ProductsList() {
	return (
		<ul className={classes.List}>
			{PopularProductsData.map((item) => (
				<Product
					key={item.id}
					name={item.name}
					image={item.image}
					alt={item.name}
					price={item.price}
				/>
			))}
		</ul>
	);
}

export default ProductsList;
