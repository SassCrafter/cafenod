import React, { useContext } from "react";
import classes from "./CheckoutForm.module.scss";
import { RadioInput, Form } from "../../../index";
import CartContext from "../../../../store/cart/cart-context";
import { useHistory } from "react-router-dom";
import { HOME } from "../../../../constants/routes.js";
import useForm from "../../../../hooks/useForm";
import checkoutFormConfig from "../../../../configs/checkoutFormConfig";

function CheckoutForm() {
  const { totalPrice, reset: resetCart } = useContext(CartContext);
  const { formState } = useForm(checkoutFormConfig);
  const [
    firstNameInput,
    lastNameInput,
    numberInput,
    ownAddressInput,
    emailAddressInput,
  ] = formState.inputs;
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    history.push(HOME);
    resetCart();
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
            <Form.InputContainer>{firstNameInput?.input}</Form.InputContainer>
            <Form.InputContainer>{lastNameInput?.input}</Form.InputContainer>
            <Form.InputContainer>{numberInput?.input}</Form.InputContainer>
          </Form.InputGroup>
          <Form.InputGroup>
            <Form.InputContainer>{ownAddressInput?.input}</Form.InputContainer>
            <Form.InputContainer>
              {emailAddressInput?.input}
            </Form.InputContainer>
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
          <Form.Submit disabled={!formState.isValid}>Place Order</Form.Submit>
        </div>
      </Form>
    </div>
  );
}

export default CheckoutForm;
