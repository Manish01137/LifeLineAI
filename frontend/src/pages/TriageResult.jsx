import { useNavigate } from "react-router-dom";

export default function TriageResult() {
  const navigate = useNavigate();

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
              <span className="score">33</span>
              <span className="label">SEVERITY</span>
            </div>
          </div>

          <div className="severity-details">
            <p className="section-label">PRIORITY CLASSIFICATION</p>
            <div className="pill mild">✔ MILD</div>
            <p className="description">
              Non-urgent case. Patient can be scheduled for standard care.
            </p>
          </div>
        </div>

        {/* Vitals */}
        <div className="grid-3">
          <div className="card vitals-card">
            <div className="icon red">❤️</div>
            <h3>78</h3>
            <p>Heart Rate (BPM)</p>
          </div>

          <div className="card vitals-card">
            <div className="icon blue">🌬</div>
            <h3>120%</h3>
            <p>Oxygen Saturation</p>
          </div>

          <div className="card vitals-card">
            <div className="icon gray">56</div>
            <h3>cardiac</h3>
            <p>Emergency Type</p>
          </div>
        </div>

        {/* AI Reasoning */}
        <div className="card ai-reasoning">
          <p className="section-label">AI ANALYSIS REASONING</p>

          <div className="reason">
            <span className="reason-icon">💓</span>
            Cardiac emergency – high priority classification
          </div>

          <div className="reason">
            <span className="reason-icon">⚠</span>
            Concerning symptom: Difficulty Speaking
          </div>
        </div>

        {/* Actions */}
        <div className="actions">
          <button className="secondary" onClick={() => navigate("/")}>
            ← Edit Assessment
          </button>
          <button className="primary" onClick={() => navigate("/hospitals")}>
            Find Hospital →
          </button>
        </div>
      </div>
    </div>
  );
}
