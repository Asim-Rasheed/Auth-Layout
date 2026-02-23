import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./pages/AuthLayout";
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthLayout/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;