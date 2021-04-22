import React from "react";
import ReactDOM from "react-dom";
import classes from "./Backdrop.module.scss";

function Backdrop({ visible, onClick }) {
	return ReactDOM.createPortal(
		<div
			className={`${classes.Container} ${visible ? classes.Show : ""}`}
			onClick={onClick}
		></div>,
		document.getElementById("backdrop")
	);
}

export default Backdrop;
