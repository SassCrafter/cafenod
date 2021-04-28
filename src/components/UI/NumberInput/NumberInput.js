import React, { useState } from "react";
import classes from "./NumberInput.module.scss";

function NumberInput({ label, onAdd, onRemove, onBtnClick, ...restProps }) {
	const [amount, setAmount] = useState(0);

	const addHandler = () => {
		setAmount((prevState) => prevState + 1);
	};
	const removeHandler = () => {
		setAmount((prevState) => (prevState > 0 ? prevState - 1 : 0));
	};
	return (
		<div className={classes.InputWrapper}>
			{label && <h4 className={classes.Label}>{label}</h4>}
			<div className={classes.Controls}>
				<button className={classes.Btn} onClick={removeHandler}>
					-
				</button>
				<span className={classes.Amount}>{amount}</span>
				<button className={classes.Btn} onClick={addHandler}>
					+
				</button>
			</div>
		</div>
	);
}

export default NumberInput;
