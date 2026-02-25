
import { FaCalendarAlt } from "react-icons/fa";

export default function ProjectCard({ projects, graph }) {
    return (
        <div className="row g-3">
            {/* Left */}
            <div className="col-lg-8">
                <div className="row g-3">
                    {projects.map((project, idx) => (
                        <div key={idx} className="col-md-4">
                            <div className="card h-100 border-0 rounded" style={{
                                background:
                                    "linear-gradient(90deg, #7b2ff7, #00c6ff)",
                                color: "white",
                            }}>
                                <div
                                    className="card-body d-flex flex-column"

                                >
                                    {/* Title */}
                                    <h6 className="card-title mb-1 fw-bold">{project.title}</h6>

                                    {/* Date with Calendar Icon */}
                                    <div
                                        className="d-flex align-items-center mb-2"
                                        style={{ fontSize: "0.85rem" }}
                                    >
                                        <FaCalendarAlt className="me-1" /> {project.date}
                                    </div>

                                    {/* Progress */}
                                    <p className="mb-2" style={{ fontSize: "0.85rem" }}>
                                        Progress: {project.progress}%
                                    </p>

                                    <div
                                        className="progress mb-2"
                                        style={{ height: "6px", background: "white" }}
                                    >
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                                width: `${project.progress}%`,
                                                backgroundColor:
                                                    project.progress <= 50 ? "#ef4444" :
                                                        project.progress <= 80 ? "#facc15" :
                                                            "#22c55e",
                                                transition: "width 0.5s ease, background-color 0.5s ease",
                                            }}
                                        />
                                    </div>

                                    {/* Avatars & Button */}
                                    <div className="mt-auto d-flex justify-content-between align-items-center">
                                        <div className="d-flex">
                                            {project.avatars?.map((avatar, i) => (
                                                <img
                                                    key={i}
                                                    src={avatar}
                                                    alt="avatar"
                                                    className="rounded-circle me-1"
                                                    style={{ width: "30px", height: "30px" }}
                                                />
                                            ))}
                                        </div>
                                        {project.buttonText && (
                                            <button className="btn btn-sm btn-success">
                                                {project.buttonText}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right: Graph Card */}
            <div className="col-lg-4 d-flex">
                <div className="card flex-fill border-0 rounded">
                    <div style={{
                        background:
                            "linear-gradient(90deg, #7b2ff7, #00c6ff)",
                        color: "white",
                    }} className="card-body rounded">
                        <h6 className="card-title mb-3">Productivity Insight</h6>
                        <div style={{ height: "250px", width: "100%" }}>{graph}</div>

                    </div>
                </div>
            </div>
        </div>
    );
}