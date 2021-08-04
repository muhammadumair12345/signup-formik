import React, { FC } from "react";
import SignupFormAvatar from "../SignupFormAvatar/SignupFormAvatar";
import SignupFormContainer from "../SignupFormContainer/SignupFormContainer";
import { App, GlobalStyle } from "./SignupFormApp.style";

const TaskBoxApp: FC = () => {
  return (
    <>
      <GlobalStyle />
      <App>
        <SignupFormAvatar />
        <SignupFormContainer />
      </App>
    </>
  );
};

export default TaskBoxApp;
