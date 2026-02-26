import { useNavigate } from "react-router-dom"
export default function ForgotPassbtn({ text }) {
  const navigate = useNavigate();
  return (
    <div className="text-end mb-3">
      <a className="text-white" style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => navigate("/forgotpassword")}>
        {text}
      </a>
    </div>)
}