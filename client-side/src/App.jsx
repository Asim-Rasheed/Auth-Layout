import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/SignIn";
import Signup from "./pages/Signup";
import AuthLayout from "./pages/AuthLayout";
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthLayout/>}/>
      <Route path="/" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;