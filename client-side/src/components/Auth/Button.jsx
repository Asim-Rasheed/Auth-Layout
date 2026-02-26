export default function Button({ text, type, onClick }) {
  return (
    <button
      type={type}
      className="btn btn-primary w-100"
      style={{background: "linear-gradient(90deg, #7b2ff7, #00c6ff)"}}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
