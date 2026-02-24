import AuthLayout from "../components/AuthLayout";
import Emailfield from "../components/Emailfield";
import { MdLockPerson } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export default function ForgotPassword() {
    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required")
    });

    const handleSubmit = (values) => {
        alert(`Email: ${values.email}`);
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
                <Form>
                    <AuthLayout >
                        <div className="text-center align-items-center mb-3 text-danger">
                            <MdLockPerson size={60} />
                            <Heading title="Forgot Password?" />
                        </div>
                        <Emailfield
                            label="Email"
                            text="Enter your email to reset password."
                            name="email"
                            value={values.email}
                            touched={touched.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={errors.email} />
                        <Button type="submit" text="Reset Password"/>
                    </AuthLayout>
                </Form>
            )}
        </Formik>
    )
}