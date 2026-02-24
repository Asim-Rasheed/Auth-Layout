export default function Emailfield({ label, text, value, onChange, onBlur, name, error, touched}) {
  return (
    <div className="mb-3 text-white">
      <label className="form-label fw-bold">{label}</label>
        <style>
        {`
          input::placeholder {
            color: white !important;
            opacity: 1;
          }
        `}
      </style>
      <input
        type="email"
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