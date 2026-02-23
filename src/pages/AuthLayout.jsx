
import { useState } from "react";
import Applogo from "../components/Applogo";
import Appdescription from "../components/Appdescription";
import Applogoimg from "../assets/images/applogo.png";
import Swapbtns from "../components/Swapbtns";
import SignIn from "./SignIn";
import Signup from "./Signup";

export default function AuthLayout() {
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
        className="card overflow-auto d-flex flex-column flex-md-row"
        style={{ borderRadius: "50px", minHeight: "600px", height: "auto", maxHeight: "90%", maxWidth: "800px", width: "90%" }}
      >
        {/* Left Side */}
        <div
          className="d-flex flex-column justify-content-center align-items-center p-4 p-md-5"
          style={{
            flex: 0.7,
            background: "#191d35",

          }}
        >
          <Applogo img={Applogoimg} className="mb-3" />
          <Appdescription
            name="App Name"
            description="Your description here"
            className="text-center text-md-left"
          />
        </div>

        {/* Right Side */}
        <div
          className="d-flex flex-column justify-content-center p-4 p-md-5"
          style={{
            flex: 1,
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