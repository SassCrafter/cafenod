import React from "react";
import classes from "./Form.module.scss";
import { Button } from "../../index";

function Form({ children, onSubmit, className }) {
	const submitHandler = (e) => {
		e.preventDefault();
	};
	return (
		<form
			onSubmit={onSubmit}
			className={`${classes.Container} ${className || ""}`}
		>
			{children}
		</form>
	);
}

export default Form;

Form.Group = function FormGroup({ children, ...restProps }) {
	return <div className={classes.Group}>{children}</div>;
};

Form.InputGroup = function FormInputGroup({
	children,
	mw,
	inputsInRow,
	...restProps
}) {
	return (
		<div
			className={`${classes.InputGroup} ${
				inputsInRow ? classes.ThreeInputs : ""
			}`}
			style={{ maxWidth: mw || "100%" }}
		>
			{children}
		</div>
	);
};

Form.Input = function FormInput({
	type = "text",
	id,
	labelText,
	className,
	...restProps
}) {
	return (
		<div className={classes.InputContainer}>
			{labelText && (
				<label className={classes.Label} htmlFor={id}>
					{labelText}
				</label>
			)}
			<input
				id={id}
				type={type}
				{...restProps}
				className={`${classes.Input} ${className || ""}`}
			/>
		</div>
	);
};

Form.Title = function FormTitle({ children, className, ...restProps }) {
	return (
		<h4 className={`${classes.Title} ${className || ""}`}>{children}</h4>
	);
};

Form.TextArea = function FormTextArea({
	fullWidth,
	className,
	labelText,
	id,
	rows = 10,
	cols = 30,
	...restProps
}) {
	return (
		<div
			className={`${classes.InputContainer} ${
				fullWidth ? classes.FullWidth : ""
			}`}
		>
			{labelText && (
				<label className={classes.Label} htmlFor={id}>
					{labelText}
				</label>
			)}
			<textarea
				className={`${classes.TextArea} ${className || ""}`}
				rows={rows}
				cols={cols}
				{...restProps}
			/>
		</div>
	);
};

Form.Submit = function FormSubmit({ children, className }) {
	return <Button type="submit">{children}</Button>;
};
