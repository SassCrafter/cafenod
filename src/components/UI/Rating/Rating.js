import React from "react";
import classes from "./Rating.module.scss";

function Rating({ rating, className }) {
	let starRatings = [];
	for (let i = 1; i < 6; i++) {
		if (i <= rating) {
			starRatings.push(<i className="fas fa-star"></i>);
		} else {
			starRatings.push(<i className="far fa-star"></i>);
		}
	}
	return (
		<div className={`${classes.Rating} ${className || ""}`}>
			<ul>
				{starRatings.map((item, idx) => (
					<li key={idx}>{item}</li>
				))}
			</ul>
		</div>
	);
}

export default Rating;
