import React from "react";
import classes from "./Input.module.scss";
import useInput from "../../../hooks/useInput";

const inputStyleClasses = {
  dark: classes.Dark,
};

function Input({
  checkFormValidity,
  id,
  label,
  type = "text",
  error,
  required,
  className,
  style,
  ...restProps
}) {
  const {
    value,
    isValid,
    hasError,
    changeHandler,
    blurHandler,
    reset,
  } = useInput((val) => val.trim().length > 0);

  const inputChangeHandler = (e) => {
    changeHandler(e);
    checkFormValidity(id, hasError);
  };

  return (
    <div
      className={`${classes.Container} ${className || ""} ${
        style ? inputStyleClasses[style] : ""
      }`}
    >
      {label && (
        <label className={classes.Label} htmlFor={id}>
          {label}
          {required && "*"}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        {...restProps}
        onChange={inputChangeHandler}
        onBlur={blurHandler}
        required={required}
        className={`${classes.Input} ${className || ""} ${
          hasError ? classes.Invalid : ""
        }`}
      />
      {hasError && <span className={classes.Error}>{error}</span>}
    </div>
  );
}

export default Input;
