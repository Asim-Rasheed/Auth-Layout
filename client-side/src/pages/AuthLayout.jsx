
import { useState } from "react";
import Applogo from "../components/Applogo";
import Appdescription from "../components/Appdescription";
import Applogoimg from "../assets/images/applogo.png";
import Swapbtns from "../components/Swapbtns";
import SignIn from "./SignIn";
import Signup from "./Signup";

export default function Signin() {
  const [activeScreen, setActiveScreen] = useState("login");

  return (
    <div
      className="d-flex justify-content-center align-items-center vw-100 vh-100"
      style={{
        background: `
          radial-gradient(circle at top left, #0b56c0 0%, transparent 15%),
          radial-gradient(circle at bottom right, #0b56c0 0%, transparent 15%),
          #010420
        `,
      }}
    >
      <div
        className="card overflow-hidden d-flex flex-row"
        style={{ borderRadius: "50px", height: "600px"}}
      >
        {/* Left Side */}
        <div
          className="d-flex flex-column justify-content-center align-items-center p-5"
          style={{
            width: "350px",
            background: "#0d0f20",
          }}
        >
          <Applogo img={Applogoimg} />
          <Appdescription
            name="App Name"
            description="Your description here"
          />
        </div>

        {/* Right Side */}
        <div
          className="d-flex flex-column justify-content-center p-5"
          style={{
            width: "450px",
            background: `
              radial-gradient(circle at top left, #0b56c0 0%, transparent 15%),
              radial-gradient(circle at bottom right, #0b56c0 0%, transparent 15%),
              #010420
            `,
          }}
        >
          <Swapbtns
            login="Login"
            register="Register"
            activeScreen={activeScreen}
            setActiveScreen={setActiveScreen}
          />

          <div className="mt-4">
            {activeScreen === "login" ? <SignIn /> : <Signup />}
          </div>
        </div>
      </div>
    </div>
  );
}