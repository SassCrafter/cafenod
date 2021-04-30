import React from "react";
import classes from "./ContactForm.module.scss";
import { Section, Card, Form } from "../../../index";
import useForm from "../../../../hooks/useForm";
import contactFormConfig from "../../../../configs/contactFormConfig";

function ContactForm() {
  const { formState } = useForm(contactFormConfig);
  const [nameInput, emailInput, subjectInput, messageInput] = formState.inputs;

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Section>
      <Card className={classes.Container}>
        <Form onSubmit={submitHandler}>
          <Form.InputGroup>
            <Form.InputContainer>{nameInput?.input}</Form.InputContainer>
            <Form.InputContainer>{emailInput?.input}</Form.InputContainer>
          </Form.InputGroup>
          <Form.InputGroup>
            <Form.InputContainer fullWidth>
              {subjectInput?.input}
            </Form.InputContainer>
          </Form.InputGroup>
          <Form.InputGroup>
            <Form.InputContainer fullWidth>
              {messageInput?.input}
            </Form.InputContainer>
          </Form.InputGroup>
          <Form.Submit disabled={!formState.isValid} center>
            Send Message
          </Form.Submit>
        </Form>
      </Card>
    </Section>
  );
}

export default ContactForm;
