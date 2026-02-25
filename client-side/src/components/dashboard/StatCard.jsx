export default function StatCard({ cards }) {
  return (
    <div className="row g-3">
      {cards.map((card, idx) => (
        <div key={idx} className="col-12 col-md-6 col-lg-3">
          <div
            className="card h-100 border-0 rounded d-flex flex-column"
            style={{
              background: "#1e293b",
              color: "white",
              borderRadius: "18px",
            }}
          >
            <div className="card-body d-flex flex-column">
              {/* Top content */}
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <p className="mb-2 text-secondary" style={{ fontSize: "14px" }}>
                    {card.title}
                  </p>
                  <h3 className="mb-1 fw-bold">{card.value}</h3>
                  {card.subtitle && (
                    <small className="text-secondary">{card.subtitle}</small>
                  )}
                </div>
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: 12,
                    background: card.iconBg,
                  }}
                >
                  {card.icon}
                </div>
              </div>

              {/* Add more content if needed at bottom */}
              <div className="mt-auto"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}