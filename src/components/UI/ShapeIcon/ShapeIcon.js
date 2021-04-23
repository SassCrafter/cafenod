import React from "react";
import classes from "./ShapeIcon.module.scss";
import { BigImage } from "../../index";

function ShapeIcon({ className, icon, alt, position }) {
	return (
		<div
			className={`${classes.Container} ${className || ""}`}
			style={position}
		>
			<div className={classes.ImageContainer}>
				<img src={icon} alt={alt} className={classes.Image} />
			</div>
			<span className={classes.Rombus}></span>
		</div>
	);
}

export default ShapeIcon;
