import React from "react";
import { Link } from "react-router-dom";
import classes from "./TabPanel.module.scss";
import { Card } from "../../../index";

function TabPanel({ title, image, description, price, linkTo }) {
	return (
		<Card className={classes.Panel}>
			<Link to={linkTo} className={classes.PanelLink}>
				<div className={classes.Description}>
					<div className={classes.Image}>
						<img src={image} alt={title} />
					</div>
					<div className={classes.Text}>
						<h3>{title}</h3>
						<p>{description}</p>
					</div>
				</div>
				<div className={classes.Price}>
					<h2>
						<span>$</span>
						{price}
					</h2>
				</div>
			</Link>
		</Card>
	);
}

export default TabPanel;
