import React, { FC, useState, useContext } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import { useFormik } from "formik";
import { SignupFormContext } from "../../context/SignupFormContext/SignupFormContext";
import { Form } from "./SignupForm.style";
import * as Yup from "yup";

const SignupForm: FC = () => {
  const [pagination, setPagination] = useState<number>(0);
  const { setStepper, setCompleted } = useContext<any>(SignupFormContext);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      millionare: false,
      money: 0,
      description: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required(),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required(),
      money: Yup.mixed().when("millionare", {
        is: false,
        then: Yup.number()
          .required()
          .min(
            1_00_0000,
            "Because you said you are a millionare you need to have 1 million"
          ),
        otherwise: Yup.number().required(),
      }),
    }),
    onSubmit: () => {
      nextState();
      setTimeout(() => {
        if (pagination === 2) {
          alert("Submit Successfully");
        }
      }, 400);
    },
  });

  const nextState = () => {
    if (pagination < 2) setPagination((prev) => ++prev);
    setStepper((prev: boolean[]) =>
      prev.map((step: boolean, index: number) =>
        index === pagination + 1 ? true : step
      )
    );
    setCompleted((prev: boolean[]) =>
      prev.map((complete: boolean, index: number) =>
        index === pagination ? true : complete
      )
    );
  };

  const prevState = () => {
    setPagination((prev) => --prev);
  };

  return (
    <Form autoComplete="off" onSubmit={formik.handleSubmit}>
      {pagination === 0 ? (
        <>
          <TextField
            type="text"
            label="First Name"
            variant="outlined"
            size="small"
            helperText={
              formik.touched.firstName && formik.errors.firstName ? (
                <div style={{ color: "red" }}>
                  {formik.errors.firstName.toUpperCase()}
                </div>
              ) : null
            }
            {...formik.getFieldProps("firstName")}
          />

          <TextField
            type="text"
            label="Last Name"
            variant="outlined"
            size="small"
            helperText={
              formik.touched.lastName && formik.errors.lastName ? (
                <div style={{ color: "red" }}>
                  {formik.errors.lastName.toUpperCase()}
                </div>
              ) : null
            }
            {...formik.getFieldProps("lastName")}
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                {...formik.getFieldProps("millionare")}
              />
            }
            label="I'am a millionaire"
          />
        </>
      ) : pagination === 1 ? (
        <>
          <TextField
            type="number"
            label="All the money I have"
            variant="outlined"
            size="small"
            helperText={
              formik.touched.money && formik.errors.money ? (
                <div style={{ color: "red" }}>
                  {formik.errors.money.toUpperCase()}
                </div>
              ) : null
            }
            {...formik.getFieldProps("money")}
          />
        </>
      ) : (
        <TextField
          type="text"
          label="Description"
          variant="outlined"
          size="small"
          {...formik.getFieldProps("description")}
        />
      )}
      {pagination !== 0 ? (
        <Button variant="contained" color="primary" onClick={prevState}>
          Back
        </Button>
      ) : null}
      <Button variant="contained" color="primary" type="submit">
        {pagination === 2 ? "Submit" : "Next"}
      </Button>
    </Form>
  );
};

export default SignupForm;
