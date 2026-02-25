import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthScreen from "./pages/AuthScreen";
import ForgotPassword from "./pages/Forgotpassword";
import Dashboard from "./pages/Dashboard";
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthScreen/>}/>
      <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;