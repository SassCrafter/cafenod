import React from "react";
import classes from "./CheckoutForm.module.scss";
import { RadioInput, Form } from "../../../index";

function CheckoutForm() {
	return (
		<div className={classes.Container}>
			<Form>
				<Form.Title>Select Payment Method</Form.Title>
				<Form.Group>
					<RadioInput
						name="payment-type"
						checked
						value="Direct Bank Transfer"
						labelText="Direct Bank Transfer"
					/>
					<RadioInput
						name="payment-type"
						value="Check Payments"
						labelText="Check Payments"
					/>
					<RadioInput
						name="payment-type"
						value="Cash on Delivery"
						labelText="Cash on Delivery"
					/>
				</Form.Group>
			</Form>
		</div>
	);
}

export default CheckoutForm;
