import { useLocation, useNavigate } from "react-router-dom";

export default function RoutingComplete() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Safety fallback (refresh / direct access)
  if (!state) {
    navigate("/");
    return null;
  }

  const {
    hospital,
    severity,
    heartRate,
    oxygen,
    emergencyType,
    age
  } = state;

  // Derived demo values (hackathon-safe)
  const severityScore =
    severity === "Critical" ? 85 : severity === "Moderate" ? 55 : 33;

  const etaMinutes = hospital?.distance
    ? Math.max(5, Math.round(hospital.distance * 2.5))
    : 8;

  const mapQuery = hospital?.name
    ? encodeURIComponent(hospital.name)
    : "City General Hospital";

  return (
    <div className="page dark">
      {/* Header */}
      <header className="topbar dark">
        <div className="logo">
          ⚡ <span>Dispatch Confirmed</span>
          <small>Mission Control</small>
        </div>
        <div className="status active">✔ Active</div>
      </header>

      <div className="content wide">
        {/* Success */}
        <div className="route-success">
          <div className="success-icon">✔</div>
          <h1>Routing Complete</h1>
          <p>Patient has been assigned to optimal facility</p>
        </div>

        {/* Map */}
        <div className="map-wrapper">
          <div className="map-header">
            <span>📍 Optimal Route</span>
            <span>
              {hospital?.distance || 3.2} km • ~{etaMinutes} min
            </span>
          </div>

          <iframe
            title="route-map"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            width="100%"
            height="320"
            style={{ border: "none" }}
            loading="lazy"
          ></iframe>

          <div className="map-footer">
            <span className="dot red">●</span> Ambulance
            <span className="dot green">●</span> {hospital?.name}
          </div>
        </div>

        <p className="gps">📡 GPS location acquired</p>

        {/* Info Cards */}
        <div className="info-grid">
          {/* Patient Status */}
          <div className="info-card">
            <h4>🫀 Patient Status</h4>
            <p>
              Severity Level{" "}
              <span className={`pill ${severity.toLowerCase()}`}>
                {severity.toUpperCase()}
              </span>
            </p>
            <p>
              Severity Score <strong>{severityScore} / 100</strong>
            </p>
            <p>
              Emergency Type <strong>{emergencyType || "General"}</strong>
            </p>
            <p>
              Patient Age <strong>{age || "N/A"} years</strong>
            </p>
            <p>
              Heart Rate <strong>{heartRate} BPM</strong>
            </p>
            <p>
              Oxygen Level <strong>{oxygen}%</strong>
            </p>
          </div>

          {/* Assigned Hospital */}
          <div className="info-card">
            <h4>🏥 Assigned Hospital</h4>
            <h3>{hospital?.name}</h3>

            <div className="mini-stats">
              <div>
                <strong>{hospital?.distance || 3.2} km</strong>
                <span>Distance</span>
              </div>
              <div>
                <strong>~{etaMinutes} min</strong>
                <span>ETA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Notification */}
        <div className="notify-card">
          📞 <strong>Hospital Notification</strong>
          <span>Emergency department has been alerted</span>
          <span className="pill success">✔ Notified</span>
        </div>

        {/* AI Decision */}
        <div className="ai-summary">
          ✨
          <h2>AI-Powered Decision</h2>
          <p>
            Routing decision completed in under
            <strong> 10 seconds</strong> using real-time hospital readiness
          </p>

          <div className="ai-stats">
            <div>
              <strong>{severityScore}</strong>
              <span>Severity Score</span>
            </div>
            <div>
              <strong>{hospital?.beds || 12}</strong>
              <span>Beds Available</span>
            </div>
            <div>
              <strong>~{etaMinutes}</strong>
              <span>Minutes to Hospital</span>
            </div>
          </div>
        </div>

        {/* Action */}
        <button
          className="primary big green"
          onClick={() => navigate("/")}
        >
          🚑 Dispatch Ambulance →
        </button>
      </div>
    </div>
  );
}
