export default function Passwordfield({ label, text, value, onChange, onBlur, name, error, touched }) {
  return (
    <div className="text-white mb-3">
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
        className="form-control"
        style={{ background: "gray", color: "white" }}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
      />
      {error && touched && <div className="text-danger">{error}</div>}
    </div>
  );
}