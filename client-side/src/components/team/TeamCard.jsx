export default function TeamCard({ team }) {
    return (
        <div className="row g-3">
            <div className="col-lg-12">
                <div className="row g-3">
                    {team.map((team, idx) => (
                        <div key={idx} className="col-md-4">
                            <div className="card h-100 border-0 rounded" style={{
                                background:
                                    "linear-gradient(70deg, #311263, #1e293b)",
                                color: "white",
                            }}>
                                <div className="card-body d-flex align-items-center justify-content-between">

                                    <div className="d-flex flex-column">
                                        <h6 className="mb-1 fw-bold">{team.name}</h6>
                                        <span>{team.role}</span>
                                    </div>
                                    <div>
                                        <img
                                            src={team.img}
                                            alt={team.name}
                                            style={{ height: "50px", width: "50px", borderRadius: "50%" }}
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