import React, { useContext } from "react";
import classes from "./CheckoutForm.module.scss";
import { RadioInput, Form } from "../../../index";
import CartContext from "../../../../store/cart/cart-context";
import { useHistory } from "react-router-dom";
import { HOME } from "../../../../constants/routes.js";

function CheckoutForm() {
	const { totalPrice } = useContext(CartContext);
	const history = useHistory();

	const submitHandler = (e) => {
		e.preventDefault();
		history.push(HOME);
	};

	return (
		<div className={classes.Container}>
			<Form onSubmit={submitHandler}>
				<Form.Group>
					<Form.Title>Select Payment Method</Form.Title>
					<Form.InputGroup mw="60rem">
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
					</Form.InputGroup>
				</Form.Group>
				<Form.Group>
					<Form.Title>Personal Info</Form.Title>
					<Form.InputGroup inputsInRow>
						<Form.Input
							labelText="First Name*"
							id="first-name"
							placeholder="First Name"
							required
						/>
						<Form.Input
							labelText="Last Name*"
							id="last-name"
							placeholder="Last Name"
							required
						/>
						<Form.Input
							labelText="Number*"
							id="number"
							placeholder="Number*"
							required
						/>
					</Form.InputGroup>
					<Form.InputGroup>
						<Form.Input
							labelText="Own Address*"
							id="own-address"
							placeholder="Own Address"
							required
						/>
						<Form.Input
							labelText="Mail Address*"
							id="mail-address"
							placeholder="Mail Address"
							required
						/>
					</Form.InputGroup>
					<Form.InputGroup>
						<Form.TextArea
							fullWidth
							id="addition-info"
							labelText="Additional Information"
							placeholder="Note about your Order, special note for Delivery !"
						/>
					</Form.InputGroup>
				</Form.Group>
				<div className={classes.Sumbit}>
					<h4 className={classes.Price}>
						Total <span>${totalPrice.toFixed(2)}</span>
					</h4>
					<Form.Submit>Place Order</Form.Submit>
				</div>
			</Form>
		</div>
	);
}

export default CheckoutForm;
