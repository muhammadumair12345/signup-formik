import React, { FC, useState, useContext } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import { Formik, Field, ErrorMessage } from "formik";
import { SignupFormContext } from "../../context/SignupFormContext/SignupFormContext";
import { FormikForm } from "./SignupForm.style";
import * as Yup from "yup";

const SignupForm: FC = () => {
  const [pagination, setPagination] = useState<number>(0);
  const { setStepper, setCompleted } = useContext<any>(SignupFormContext);

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
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        millionare: false,
        money: 0,
        description: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        money: Yup.mixed().when("millionare", {
          is: true,
          then: Yup.number()
            .required()
            .min(
              1_000_000,
              "Because you said you are a millionare you need to have 1 million"
            ),
          otherwise: Yup.number().required(),
        }),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          nextState();
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          nextState();
        }, 400);
      }}
    >
      <FormikForm>
        {pagination === 0 ? (
          <>
            <Field
              name="firstname"
              type="text"
              component={TextField}
              label="First Name"
              variant="outlined"
              size="small"
            />
            <Field
              name="lastname"
              type="text"
              component={TextField}
              label="Last Name"
              variant="outlined"
              size="small"
            />
            <Field
              name="millionare"
              component={FormControlLabel}
              control={<Checkbox name="checkedB" color="primary" />}
              label="I'am a millionaire"
            />
            <Button variant="contained" color="primary" onClick={nextState}>
              Next
            </Button>
          </>
        ) : pagination === 1 ? (
          <>
            <Field
              name="money"
              type="number"
              component={TextField}
              label="All the money I have"
              variant="outlined"
              size="small"
            />
            <Button variant="contained" color="primary" onClick={prevState}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={nextState}>
              Next
            </Button>
          </>
        ) : (
          <>
            <Field
              name="description"
              type="text"
              component={TextField}
              label="Description"
              variant="outlined"
              size="small"
            />
            <Button variant="contained" color="primary" onClick={prevState}>
              Back
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </>
        )}
      </FormikForm>
    </Formik>
  );
};

export default SignupForm;
