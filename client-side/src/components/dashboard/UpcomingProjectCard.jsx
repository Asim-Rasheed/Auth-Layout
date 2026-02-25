export default function UpcomingProjectCard({ upcoming }) {
  return (
    <div className="row g-3">
      {/* Left Section */}
      <div className="col-lg-12">
        <div className="row g-3">
          {upcoming.map((project, idx) => (
            <div key={idx} className="col-md-4">
              <div
                className="card h-100 border-0 rounded"
                style={{
                  background: "linear-gradient(90deg, #311263, #1e293b)",
                  color: "white",
                }}
              >
                <div className="card-body d-flex flex-column">
                  
                  {/* Title */}
                  <h6 className="fw-bold mb-1">{project.title}</h6>

                  {/* Subtitle */}
                  <p className="mb-2" style={{ fontSize: "0.85rem" }}>
                    {project.subtitle}
                  </p>

                  {/* Priority */}
                  <span
                    className={`badge mb-3 ${
                      project.priority === "High"
                        ? "bg-danger"
                        : project.priority === "Medium"
                        ? "bg-warning text-dark"
                        : "bg-success"
                    }`}
                    style={{ width: "fit-content" }}
                  >
                    {project.priority}
                  </span>

                  {/* Bottom Section */}
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span style={{ fontSize: "0.8rem" }}>
                      Created by: {project.creator}
                    </span>

                    <img
                      src={project.image}
                      alt="creator"
                      className="rounded-circle"
                      style={{ width: "35px", height: "35px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}