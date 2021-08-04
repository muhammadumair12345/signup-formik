import React, { FC } from "react";
import {
  Label,
  Line,
  Step,
  Stepper,
  StepperContainer,
} from "./SignupFormStepper.style";

const SignupFormStepper: FC = () => {
  return (
    <StepperContainer>
      <Stepper>
        <Step>1</Step>
        <Label>Personal Data</Label>
      </Stepper>
      <Line />
      <Stepper>
        <Step>2</Step>
        <Label>Bank Accounts</Label>
      </Stepper>
      <Line />
      <Stepper>
        <Step>3</Step>
        <Label>More Info</Label>
      </Stepper>
    </StepperContainer>
  );
};

export default SignupFormStepper;
