import React, { FC, useContext } from "react";
import { SignupFormContext } from "../../context/SignupFormContext/SignupFormContext";
import { Line, Step, Stepper } from "./SignupFormStepper.style";
import CheckIcon from "@material-ui/icons/Check";

const SignupFormStepper: FC = () => {
  const { stepper, completed } = useContext<any>(SignupFormContext);
  return (
    <Stepper>
      {stepper.map((step: boolean, index: number) => (
        <React.Fragment key={index}>
          <Step active={step}>
            {completed[index] ? <CheckIcon fontSize="small" /> : index + 1}
          </Step>
          {index !== stepper.length - 1 ? <Line /> : ""}
        </React.Fragment>
      ))}
    </Stepper>
  );
};

export default SignupFormStepper;
