export default function DashboardSidebar({ menuItems, activeItem, onSelect }) {
  return (
    <div className="d-flex flex-column p-3 text-white rounded" style={{ width: 250, minHeight: "100vh", background: "#191d35" }}>
      <h4 className="mb-4 p-3 text-center rounded" style={{ background: "linear-gradient(90deg, #7b2ff7, #00c6ff)" }}>App Studio</h4>
      <ul className="nav flex-column text-white">
        {menuItems.map((item, id) => (
          <li key={id} className={`nav-item mb-2 ${activeItem === item.name ? "fw-bold text-primary" : ""}`} style={{ cursor: "pointer" }} onClick={() => onSelect(item.name)}>
            {item.icon}
            <span className="ms-2">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}