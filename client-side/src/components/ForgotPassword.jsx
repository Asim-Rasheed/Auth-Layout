
export default function ForgotPassword({text}){
    return(
<div className="text-end mb-3">
  <a className="text-white" style={{ textDecoration: "underline", cursor: "pointer" }}>
    {text}
  </a>
</div>)
}