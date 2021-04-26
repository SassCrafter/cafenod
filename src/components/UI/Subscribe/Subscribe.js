import React from "react";
import classes from "./Subscribe.module.scss";
import { Form } from "../../index";
import useForm from "../../../hooks/useForm";

const config = [
  {
    name: "subscribeEmail",
    placeholder: "Enter Your Email",
    required: true,
    error: "Input cannot be empty",
    type: "email",
    style: "dark",
  },
];

function Subscribe() {
  const { formState } = useForm(config);
  const [emailInput] = formState.inputs;

  return (
    <div className={classes.Container}>
      <Form>
        <Form.Group className={classes.Group}>
          <Form.InputGroup className={classes.InputContainer}>
            {emailInput?.input}
          </Form.InputGroup>
          <div className={classes.SubmitContainer}>
            <Form.Submit
              disabled={!formState.isValid}
              className={classes.Subscribe}
            >
              Subscribe
            </Form.Submit>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Subscribe;
