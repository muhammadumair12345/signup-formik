import styled from "styled-components";

export const StepperContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Stepper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Step = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 2rem;
  min-height: 2rem;
  margin-bottom: 0.8rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 0.4rem;
  border-radius: 50px;
  background: linear-gradient(#3e7ebc, #89bce5);
  color: #fff;
`;

export const Line = styled.div`
  flex-grow: 1;
  margin-bottom: 30px;
  border: 1px solid #fff;
`;

export const Label = styled.h5`
  color: #fff;
`;
