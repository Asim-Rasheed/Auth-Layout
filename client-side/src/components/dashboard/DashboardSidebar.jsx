import { FaTimes } from "react-icons/fa"
import Applogo from "../../assets/images/applogo.png"
import { useNavigate } from "react-router-dom"
export default function DashboardSidebar({ menuItems = [], activeItem, onSelect, show, onClose }) {
  const navigate = useNavigate();
  return (
    <>
      {show && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.4)", zIndex: 999 }}
          onClick={onClose}

        />
      )}

      <div
        className={`d-flex flex-column p-3 text-white rounded bg-dark ${show ? "d-flex" : "d-none d-md-flex"
          }`}
        style={{
          width: 250,
          top: 0,
          height: "100vh",
          position: show ? "fixed" : "sticky",
          background: "#1e293b",
          zIndex: 1001, // overlay above content on mobile
        }}
      >
        <button
          className="btn btn-sm btn-dark ms-auto mb-3 d-md-none"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <h4
          className="mb-4 p-3 text-center rounded" style={{ background: "linear-gradient(90deg, #7b2ff7, #00c6ff)" }}>
          <img
            src={Applogo}
            alt="Logo"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50px",
              marginRight: "10px"
            }}
          />My App</h4>

        <ul className="nav flex-column text-white">
          {menuItems.map((item, id) => (
            <li key={id} className={`nav-item mb-2 rounded ${activeItem === item.name ? "fw-bold text-white " : "gray"}`}
              style={{
                background: activeItem === item.name ? "linear-gradient(90deg, #311263, #1e293b)" : "transparent",
                cursor: "pointer", padding: "8px 12px",
              }}
              onClick={() => {
                onSelect(item.name);
                if (item.name === "Dashboard") { navigate("/dashboard") }
                else if (item.name === "Calendar") { navigate("/calendar") }
                else if (item.name==="Projects") {navigate("/project")}
                else { navigate("/team") }
              }}
            >

              {item.icon}
              <span className="ms-2">{item.label}</span>
            </li>
          ))}
        </ul>
             <div className="mt-auto">
        <button
          className="btn w-100 btn-danger"
          style={{
            color: "#fff",
            border: "none",
          }}
          onClick={() => navigate("/")}
        >
          Logout
        </button>
      </div>
      </div>
    </>
  )
}
