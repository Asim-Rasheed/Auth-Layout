export default function Button({ text, onClick }) {
  return (
    <button
      type="button"
      className="btn btn-primary w-100"
      style={{ background: "linear-gradient(90deg, #7b2ff7, #00c6ff)" }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
