export default function Passwordfield({ label, text }) {
  return (
    <div className="mb-5 text-white">
      <label className="form-label">{label}</label>
      <style>
    {`
      input::placeholder {
        color: white !important;
        opacity: 1;
      }
    `}
  </style>

  <input
    type="password"
    placeholder={text}
    required
    className="form-control"
    style={{ background: "gray", color: "white" }}
  />
    </div>
  );
}
