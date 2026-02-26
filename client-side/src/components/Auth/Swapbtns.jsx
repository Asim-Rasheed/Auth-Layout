export default function Swapbtns({
  login,
  register,
  activeScreen,
  setActiveScreen,
}) {
  return (
    <div className="d-flex justify-content-center">
      <div className="p-1 rounded-pill bg-dark d-inline-flex">
        <button
          onClick={() => setActiveScreen("login")}
          className="btn rounded-pill px-4 text-white"
          style={{
            background:
              activeScreen === "login"
                ? "linear-gradient(90deg, #7b2ff7, #00c6ff)"
                : "transparent",
            border: "none",
          }}
        >
          {login}
        </button>

        <button
          onClick={() => setActiveScreen("register")}
          className="btn rounded-pill px-4 text-white"
          style={{
            background:
              activeScreen === "register"
                ? "linear-gradient(90deg, #7b2ff7, #00c6ff)"
                : "transparent",
            border: "none",
          }}
        >
          {register}
        </button>
      </div>
    </div>
  );
}