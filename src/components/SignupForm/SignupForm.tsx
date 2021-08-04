import { TextField } from "@material-ui/core";
import React, { FC } from "react";
import { Form } from "./SignupForm.style";

const SignupForm: FC = () => {
  return (
    <Form>
      <TextField id="standard-basic" label="Standard" />
    </Form>
  );
};

export default SignupForm;
