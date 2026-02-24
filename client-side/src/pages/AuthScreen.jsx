import { useState } from "react";
import Swapbtns from "../components/Swapbtns";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AuthCardLayout from "../components/AuthCardLayout";

export default function AuthScreen() {
  const [activeScreen, setActiveScreen] = useState("login");

  return (
    <AuthCardLayout>
      <Swapbtns
        login="Login"
        register="Register"
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
      />

      <div className="mt-4">
        {activeScreen === "login" ? <SignIn /> : <SignUp />}
      </div>
    </AuthCardLayout>
  );
}