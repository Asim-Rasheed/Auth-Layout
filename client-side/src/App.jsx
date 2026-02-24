import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthScreen from "./pages/AuthScreen";
import ForgotPassword from "./pages/Forgotpassword";
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthScreen/>}/>
      <Route path="/forgotpassword" element={<ForgotPassword/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;