import { useState, useEffect, useReducer } from "react";
import useInput from "./useInput";
import { Input } from "../components";

const defaultState = {
  inputs: [],
  isValid: false,
};

const formReducer = (state, action) => {
  if (action.type === "ADD_INPUTS") {
    return {
      inputs: action.inputsObj,
      isValid: false,
    };
  }
  if (action.type === "FORM_VALIDATION") {
    const touchedInputIdx = state.inputs.findIndex((el) => el.id === action.id);
    const touchedInput = state.inputs[touchedInputIdx];
    const updatedInput = {
      ...touchedInput,
      touched: true,
      hasError: action.hasError,
    };
    const updatedInputs = [...state.inputs];
    updatedInputs[touchedInputIdx] = updatedInput;
    let isFormValid = false;

    if (updatedInputs.every((el) => el.hasError === false)) {
      isFormValid = true;
    }

    return {
      inputs: updatedInputs,
      isValid: isFormValid,
    };
  }
  return defaultState;
};

const useForm = (formConfig) => {
  const [formState, dispatchFormAction] = useReducer(formReducer, defaultState);

  const checkFormValidaty = (id, hasError) => {
    dispatchFormAction({ type: "FORM_VALIDATION", id, hasError });
  };

  const addFormInputs = (inputsObj) => {
    dispatchFormAction({ type: "ADD_INPUTS", inputsObj });
  };

  useEffect(() => {
    const inputs = formConfig.map((item) => {
      return {
        id: item.label,
        hasError: true,
        touched: false,
        input: (
          <Input
            key={item.label}
            id={item.label}
            type={item.type || "text"}
            label={item.label}
            placeholder={item.placeholder}
            error={item.error}
            required={item.required}
            checkFormValidity={checkFormValidaty}
            style={item.style}
            cols={item.cols}
            rows={item.rows}
          />
        ),
      };
    });
    addFormInputs(inputs);
  }, []);

  return {
    formState,
  };
};

export default useForm;
