import styled from "styled-components";

export const Stepper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Step = styled.div`
  min-width: 2rem;
  min-height: 2rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 0.4rem;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#3e7ebc, #89bce5);
  color: #fff;
`;

export const Line = styled.div`
  flex-grow: 1;
  margin: 0 0.4rem;
  border: 1px solid #fff;
`;
