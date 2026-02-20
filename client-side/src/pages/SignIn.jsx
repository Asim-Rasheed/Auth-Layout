
import Heading from "../components/Heading";
import Emailfield from "../components/Emailfield";
import Passwordfield from "../components/Passwordfield";
import Button from "../components/Button";

export default function SignIn() {

  return (
    <form 
      className="d-flex flex-column justify-content-center"

    >
      <Heading title="Welcome back!" subTitle="Please enter your credentials."/>

      <Emailfield
        label="Name"
        text="Enter your email"

      />

      <Passwordfield
        label="Password"
        text="Enter your password"
      />

      <Button type="submit" text="Initialize Session" />
    </form>
  );
}