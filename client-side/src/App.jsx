import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AuthLayout from "./pages/AuthLayout";
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthLayout/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;