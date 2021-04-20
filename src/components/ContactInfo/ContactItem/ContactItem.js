import React from "react";
import classes from "./ContactItem.module.scss";

function ContactItem({ children, iconClass }) {
	return (
		<li className={classes.Container}>
			<div className={classes.Icon}>
				<i className={iconClass}></i>
			</div>
			{children}
		</li>
	);
}

export default ContactItem;
