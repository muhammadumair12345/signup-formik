import React, { FC } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import { Form } from "./SignupForm.style";

const SignupForm: FC = () => {
  return (
    <Form>
      <TextField
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        size="small"
      />
      <TextField
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        size="small"
      />
      <FormControlLabel
        control={<Checkbox name="checkedB" color="primary" />}
        label="I'am a millionaire"
      />
      <Button variant="contained" color="primary">
        Next
      </Button>
    </Form>
  );
};

export default SignupForm;
