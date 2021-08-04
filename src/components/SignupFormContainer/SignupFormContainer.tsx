import React, { FC } from "react";
import SignupForm from "../SignupForm/SignupForm";
import SignupFormStepper from "../SignupFormStepper/SignupFormStepper";
import { Container } from "./SignupFormContainer.style";

const TaskBoxContainer: FC = () => {
  return (
    <Container>
      <SignupFormStepper />
      <SignupForm />
    </Container>
  );
};

export default TaskBoxContainer;
