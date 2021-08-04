import React, { FC } from "react";
import SignupForm from "../SignupForm/SignupForm";
import { Container } from "./SignupFormContainer.style";

const TaskBoxContainer: FC = () => {
  return (
    <Container>
      <SignupForm />
    </Container>
  );
};

export default TaskBoxContainer;
