import React, { FC } from "react";
import { Line, Step, Stepper } from "./SignupFormStepper.style";

const SignupFormStepper: FC = () => {
  return (
    <Stepper>
      <Step>1</Step>
      <Line />
      <Step>2</Step>
      <Line />
      <Step>3</Step>
    </Stepper>
  );
};

export default SignupFormStepper;
