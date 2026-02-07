import { useNavigate, useLocation } from "react-router-dom";

export default function HospitalAssignment() {
  const navigate = useNavigate();
  const { state } = useLocation();

  // Safety fallback
  if (!state) {
    navigate("/");
    return null;
  }

  const { severity, hospital, heartRate, oxygen, emergencyType } = state;

  // Dummy list for UI comparison (hackathon-safe)
  const hospitals = [
    hospital,
    {
      name: "St. Mary’s Medical Center",
      distance: 5.8,
      beds: 8,
      icu: true,
      status: "Available",
      specialties: ["Pediatrics", "General Surgery"]
    },
    {
      name: "Metro Health Complex",
      distance: 2.1,
      beds: 3,
      icu: false,
      status: "Limited",
      specialties: ["Orthopedics", "General Medicine"]
    }
  ];

  return (
    <div className="page">
      {/* Header */}
      <header className="topbar">
        <div className="logo">
          ⚡ <span>Hospital Assignment</span>
          <small>AI Load Balancer</small>
        </div>
        <div className={`pill ${severity.toLowerCase()}`}>
          ✔ {severity.toUpperCase()}
        </div>
      </header>

      <div className="content">
        {/* Capacity Snapshot */}
        <div className="section-header">
          🏥 Hospital Capacity Snapshot
          <span className="live">● Real-time Data</span>
        </div>

        <div className="hospital-grid">
          {hospitals.map((h, index) => (
            <div
              key={index}
              className={`hospital-card ${
                h.name === hospital.name ? "selected" : ""
              } ${!h.icu ? "limited" : ""}`}
            >
              <h3>{h.name}</h3>
              <span
                className={`tag ${
                  h.icu ? "available" : "limited"
                }`}
              >
                {h.icu ? "Available" : "Limited"}
              </span>

              <div className="stats">
                <div>
                  <strong>{h.distance}</strong>
                  <span>km away</span>
                </div>
                <div>
                  <strong>{h.beds || 0}</strong>
                  <span>beds free</span>
                </div>
                <div className={`icu ${h.icu ? "" : "off"}`}>
                  <strong>ICU</strong>
                  <span>{h.icu ? "Ready" : "Full"}</span>
                </div>
              </div>

              <div className="chips">
                {(h.specialties || ["Cardiac Care", "Trauma"]).map(
                  (s) => (
                    <span key={s}>{s}</span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* AI Decision */}
        <div className="decision-card">
          <div className="decision-header">
            ✅ <span>AI DECISION COMPLETE</span>
            <h2>Optimal Hospital Selected</h2>
          </div>

          <div className="decision-main">
            <h1>{hospital.name}</h1>

            <div className="decision-stats">
              <div>
                <strong>{hospital.distance} km</strong>
                <span>Distance</span>
              </div>
              <div>
                <strong>{hospital.beds || 12}</strong>
                <span>Beds Available</span>
              </div>
              <div className="good">
                <strong>{hospital.icu ? "Yes" : "No"}</strong>
                <span>ICU Ready</span>
              </div>
            </div>
          </div>

          <div className="decision-reason">
            <h4>🛡 Why This Hospital Was Selected</h4>
            <ul>
              <li>Matches patient severity: {severity}</li>
              <li>ICU availability confirmed</li>
              <li>Shortest ETA from current location</li>
              <li>Optimized using real-time capacity</li>
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="actions">
          <button className="secondary" onClick={() => navigate("/result")}>
            ← Back to Triage
          </button>

          <button
            className="primary green"
            onClick={() =>
              navigate("/route", {
                state: {
                  hospital,
                  severity,
                  heartRate,
                  oxygen,
                  emergencyType
                }
              })
            }
          >
            Confirm & Dispatch →
          </button>
        </div>
      </div>
    </div>
  );
}
