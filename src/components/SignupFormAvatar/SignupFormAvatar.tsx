import React, { FC } from "react";
import { Avatar } from "./SignupFormAvater.style";
import SignupAvatar from "../../images/signup-avatar.png";

const SignupFormAvatar: FC = () => {
  return <Avatar src={SignupAvatar} alt="" />;
};

export default SignupFormAvatar;
