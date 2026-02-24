import { Formik, Form } from "formik";
import * as Yup from "yup";
import Heading from "../components/Heading";
import Emailfield from "../components/Emailfield";
import Passwordfield from "../components/Passwordfield";
import Button from "../components/Button";
import ForgotPassbtn from "../components/ForgotPassbtn";

export default function SignIn() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Minimum 6 characters")
      .matches(/\d/, "Must contain at least one number")
      .matches(/[A-Z]/, "Must contain one uppercase letter")
  });

  const handleSubmit = (values) => {
    alert(`Email: ${values.email}\nPassword: ${values.password}`);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
      }) => (
        <Form className="d-flex flex-column justify-content-center">

          <Heading
            title="Welcome back!"
            subTitle="Please enter your credentials."
          />

          <Emailfield
            label="Email"
            text="Enter your email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
          />

          <Passwordfield
            label="Password"
            text="Enter your password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password}
            touched={touched.password}
          />

          <ForgotPassbtn
            text="Forgot Password?" />

          <Button type="submit" text="Initialize Session" />

        </Form>
      )}
    </Formik>
  );
}