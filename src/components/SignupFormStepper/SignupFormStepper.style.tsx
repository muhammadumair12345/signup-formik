import styled from "styled-components";

export const Stepper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
`;

export const Step = styled.div`
  text-align: center;
  min-width: 2rem;
  max-height: 2rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 0.4rem;
  border-radius: 50px;
  background: ${({ active }: any) =>
    active
      ? "linear-gradient(#3e7ebc, #89bce5)"
      : "linear-gradient(#787c81, #b4b9bd)"};
  color: #fff;
`;

export const Line = styled.div`
  flex-grow: 1;
  margin: 0 0.8rem;
  border: 1px solid #fff;
`;

export const Label = styled.h5`
  color: #fff;
`;
