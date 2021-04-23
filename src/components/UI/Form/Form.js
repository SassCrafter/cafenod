import React from "react";
import classes from "./Form.module.scss";

function Form({ children, onSubmit, className }) {
	const submitHandler = (e) => {
		e.preventDefault();
	};
	return (
		<form className={`${classes.Container} ${className || ""}`}>
			{children}
		</form>
	);
}

export default Form;

Form.Group = function FormGroup({ children, ...restProps }) {
	return <div className={classes.Group}>{children}</div>;
};

Form.Title = function FormTitle({ children, className, ...restProps }) {
	return (
		<h4 className={`${classes.Title} ${className || ""}`}>{children}</h4>
	);
};

// Form.Submit = function FormS
