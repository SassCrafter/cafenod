import React from "react";
import classes from "./RadioInput.module.scss";

function RadioInput({ name, value, checked, labelText }) {
	return (
		<div className={classes.Container}>
			<input
				type="radio"
				name={name}
				value={value}
				defaultChecked={checked}
				className={classes.Radio}
				id={value}
			/>
			{labelText && (
				<label className={classes.Label} htmlFor={value}>
					{labelText}
				</label>
			)}
		</div>
	);
}

export default RadioInput;
