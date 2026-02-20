
import Heading from "../components/Heading";
import Emailfield from "../components/Emailfield";
import Passwordfield from "../components/Passwordfield";
import Button from "../components/Button";
import Textfield from "../components/Textfield";

export default function Signup() {


    return (
        <form
            className="d-flex flex-column justify-content-center"

        >
            <Heading title="New Connection" subTitle="Create your profile to start the new journey." />

            <Textfield label="Name" text="Enter your name"/>

            <Emailfield
                label="Email"
                text="Enter your email"
            />

            <Passwordfield
                label="Password"
                text="Create a password"

            />

            <Button text="Create Account" />
        </form>
    );
}