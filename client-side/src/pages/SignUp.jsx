import { Formik, Form } from "formik";
import * as Yup from "yup";
import Heading from "../components/Heading";
import Emailfield from "../components/Emailfield";
import Passwordfield from "../components/Passwordfield";
import Button from "../components/Button";
import Textfield from "../components/Textfield";

export default function SignUp() {
    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .required("Enter your name"),

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
                submitCount,
            }) => (
                <Form
                    className="d-flex flex-column justify-content-center"

                >
                    <Heading title="New Connection"
                        subTitle="Create your profile to start the new journey."
                    />

                    <Textfield label="Name"
                        text="Enter your name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="name"
                        value={values.name}
                        error={errors.name}
                        touched={touched.name} />

                    <Emailfield
                        label="Email"
                        text="Enter your email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="email"
                        value={values.email}
                        error={errors.email}
                        touched={touched.email}
                    />

                    <Passwordfield
                        label="Password"
                        text="Create a password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="password"
                        value={values.password}
                        error={errors.password}
                        touched={touched.password}
                    />

                    <Button text="Create Account" />
                </Form>
            )}
        </Formik>
    );
}