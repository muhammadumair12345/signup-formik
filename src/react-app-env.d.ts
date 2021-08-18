/// <reference types="react-scripts" />
declare module "styled-components";
declare module "*.png";

type InitialState1 = boolean[];

interface InitialState2 {
  stepper: InitialState1;
  setStepper: React.Dispatch<React.SetStateAction<InitialState1>>;
  completed: InitialState1;
  setCompleted: React.Dispatch<React.SetStateAction<InitialState1>>;
}

type State = InitialState1 | InitialState2;
