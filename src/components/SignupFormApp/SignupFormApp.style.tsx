import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
     margin:0;
     padding:0;
     box-sizing: border-box;
     user-select: none;
   }
   body{
       font-size: 1rem;
       font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   }
`;

export const App = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  background-color: #00b8e926;
`;
