import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthScreen from "./pages/AuthScreen";
import ForgotPasswordScreen from "./pages/ForgotPasswordScreen";
import Dashboard from "./pages/Dashboard";
import CalendarScreen from "./pages/CalendarScreen";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import ProjectScreen from "./pages/ProjectScreen";
import TeamScreen from "./pages/TeamScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calendar" element={<CalendarScreen />} />
          <Route path="/project" element={<ProjectScreen/>}/>
        <Route path="/team" element={<TeamScreen/>}/>
        </Route>
        <Route path="/" element={<AuthScreen />} />
        <Route path="/forgotpassword" element={<ForgotPasswordScreen/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;