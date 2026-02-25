import { FaBell, FaCog, FaBars } from "react-icons/fa";

export default function DashboardHeader({ title, subtitle, onShare, onNotification, onSettings, onMenuClick }) {
  return (
    <div className="d-flex justify-content-between align-items-start p-3 rounded" style={{ color: "white", background: "#010420", border: "3px solid black" }}>
      <div>
        <button
          className="btn btn-dark d-md-none me-3"
          onClick={onMenuClick}
        >
          <FaBars />
        </button>

        <h3 className="mb-1">{title}</h3>
        <p className="mb-0" style={{ fontSize: "14px" }}>{subtitle}</p>
      </div>
      <div className="d-flex align-items-center gap-3">
        <FaBell style={{ cursor: "pointer" }} onClick={onNotification} />
        <FaCog style={{ cursor: "pointer" }} onClick={onSettings} />
        <button className="btn text-white border-0 sm-btn rounded-pill" style={{ background: "linear-gradient(90deg, #7b2ff7, #00c6ff)" }}
          onClick={onShare}>Share</button>
      </div>
    </div>
  )
}       