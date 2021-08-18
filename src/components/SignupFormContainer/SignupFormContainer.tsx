import React, { FC } from "react";
import { SignupFormProvider } from "../../context/SignupFormContext/SignupFormContext";
import SignupForm from "../SignupForm/SignupForm";
import SignupFormStepper from "../SignupFormStepper/SignupFormStepper";
import { Container } from "./SignupFormContainer.style";

const TaskBoxContainer: FC = () => {
  return (
    <Container>
      <SignupFormProvider>
        <SignupFormStepper />
        <SignupForm />
      </SignupFormProvider>
    </Container>
  );
};

export default TaskBoxContainer;
