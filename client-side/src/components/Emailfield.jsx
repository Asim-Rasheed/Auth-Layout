export default function Emailfield({ label, text }) {
  return (
    <div className="mb-3 text-white">
      <label className="form-label">{label}</label>
      <input
      style={{background: "gray", color: "white"}}
        type="email"
        placeholder={text}
        required
        className="form-control"
      />
    </div>
  );
}
