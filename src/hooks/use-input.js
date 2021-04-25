import { useState } from "react";

const useInput = (valueValidation) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [enteredValueTouched, setEnteredValueTouched] = useState(false);

	const isValid = valueValidation(enteredValue);
	const hasError = !isValid && enteredValueTouched;

	const changeHandler = (e) => {
		setEnteredValue(e.target.value);
	};

	const blurHandler = () => {
		setEnteredValueTouched(true);
	};

	const reset = () => {
		setEnteredValue("");
		setEnteredValueTouched(false);
	};

	return {
		value: enteredValue,
		isValid,
		hasError,
		changeHandler,
		blurHandler,
		reset,
	};
};

export default useInput;
