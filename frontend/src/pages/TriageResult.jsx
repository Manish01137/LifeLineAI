import { useNavigate, useLocation } from "react-router-dom";

export default function TriageResult() {
  const navigate = useNavigate();
  const { state } = useLocation();

  // Fallback safety (in case page refresh)
  if (!state) {
    navigate("/");
    return null;
  }

  const {
    severity,
    hospital,
    heartRate,
    oxygen,
    emergencyType,
    symptoms
  } = state;

  const severityScore =
    severity === "Critical" ? 85 : severity === "Moderate" ? 55 : 33;

  const severityLabel =
    severity === "Critical"
      ? "CRITICAL"
      : severity === "Moderate"
      ? "MODERATE"
      : "MILD";

  return (
    <div className="page">
      {/* Header */}
      <header className="topbar">
        <div className="logo">
          ⚡ <span>AI Triage Result</span>
          <small>Assessment Complete</small>
        </div>
        <div className="status blue">⏱ Analyzed in 2s</div>
      </header>

      <div className="content">
        {/* Severity Section */}
        <div className="card severity-card">
          <div className="severity-ring">
            <div className="ring">
              <span className="score">{severityScore}</span>
              <span className="label">SEVERITY</span>
            </div>
          </div>

          <div className="severity-details">
            <p className="section-label">PRIORITY CLASSIFICATION</p>
            <div className={`pill ${severityLabel.toLowerCase()}`}>
              ✔ {severityLabel}
            </div>
            <p className="description">
              {severity === "Critical"
                ? "Immediate medical attention required."
                : severity === "Moderate"
                ? "Urgent case. Monitor closely."
                : "Non-urgent case. Standard care recommended."}
            </p>
          </div>
        </div>

        {/* Vitals */}
        <div className="grid-3">
          <div className="card vitals-card">
            <div className="icon red">❤️</div>
            <h3>{heartRate}</h3>
            <p>Heart Rate (BPM)</p>
          </div>

          <div className="card vitals-card">
            <div className="icon blue">🌬</div>
            <h3>{oxygen}%</h3>
            <p>Oxygen Saturation</p>
          </div>

          <div className="card vitals-card">
            <div className="icon gray">🫀</div>
            <h3>{emergencyType || "General"}</h3>
            <p>Emergency Type</p>
          </div>
        </div>

        {/* AI Reasoning */}
        <div className="card ai-reasoning">
          <p className="section-label">AI ANALYSIS REASONING</p>

          <div className="reason">
            <span className="reason-icon">💓</span>
            {emergencyType || "Medical"} indicators detected
          </div>

          {symptoms && symptoms.length > 0 && (
            <div className="reason">
              <span className="reason-icon">⚠</span>
              Concerning symptom: {symptoms[0]}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="actions">
          <button className="secondary" onClick={() => navigate("/")}>
            ← Edit Assessment
          </button>

          <button
            className="primary"
            onClick={() =>
              navigate("/hospitals", {
                state: {
                  severity,
                  hospital,
                  heartRate,
                  oxygen,
                  emergencyType
                }
              })
            }
          >
            Find Hospital →
          </button>
        </div>
      </div>
    </div>
  );
}
