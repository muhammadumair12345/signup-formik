import React, { createContext, FC, useState } from "react";

const initialState1: InitialState1 = [true, false, false];

export const SignupFormContext = createContext<State>(initialState1);

export const SignupFormProvider: FC = ({ children }) => {
  const [stepper, setStepper] = useState<InitialState1>([true, false, false]);
  const [completed, setCompleted] = useState<InitialState1>([
    false,
    false,
    false,
  ]);

  const initialState2: InitialState2 = {
    stepper,
    setStepper,
    completed,
    setCompleted,
  };

  return (
    <SignupFormContext.Provider value={initialState2}>
      {children}
    </SignupFormContext.Provider>
  );
};
