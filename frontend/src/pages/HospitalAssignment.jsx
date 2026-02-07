import { useNavigate } from "react-router-dom";

export default function HospitalAssignment() {
  const navigate = useNavigate();

  return (
    <div className="page">
      {/* Header */}
      <header className="topbar">
        <div className="logo">
          ⚡ <span>Hospital Assignment</span>
          <small>AI Load Balancer</small>
        </div>
        <div className="pill mild">✔ MILD</div>
      </header>

      <div className="content">
        {/* Capacity Snapshot */}
        <div className="section-header">
          🏥 Hospital Capacity Snapshot
          <span className="live">● Real-time Data</span>
        </div>

        <div className="hospital-grid">
          <div className="hospital-card selected">
            <h3>City General Hospital</h3>
            <span className="tag available">Available</span>

            <div className="stats">
              <div>
                <strong>3.2</strong>
                <span>km away</span>
              </div>
              <div>
                <strong>12</strong>
                <span>beds free</span>
              </div>
              <div className="icu">
                <strong>ICU</strong>
                <span>Ready</span>
              </div>
            </div>

            <div className="chips">
              <span>Cardiac Care</span>
              <span>Trauma</span>
              <span>Neurology</span>
            </div>
          </div>

          <div className="hospital-card">
            <h3>St. Mary’s Medical Center</h3>
            <span className="tag available">Available</span>

            <div className="stats">
              <div>
                <strong>5.8</strong>
                <span>km away</span>
              </div>
              <div>
                <strong>8</strong>
                <span>beds free</span>
              </div>
              <div className="icu">
                <strong>ICU</strong>
                <span>Ready</span>
              </div>
            </div>

            <div className="chips">
              <span>Pediatrics</span>
              <span>General Surgery</span>
            </div>
          </div>

          <div className="hospital-card limited">
            <h3>Metro Health Complex</h3>
            <span className="tag limited">Limited</span>

            <div className="stats">
              <div>
                <strong>2.1</strong>
                <span>km away</span>
              </div>
              <div>
                <strong>3</strong>
                <span>beds free</span>
              </div>
              <div className="icu off">
                <strong>ICU</strong>
                <span>Full</span>
              </div>
            </div>

            <div className="chips">
              <span>Orthopedics</span>
              <span>General Medicine</span>
            </div>
          </div>
        </div>

        {/* AI Decision */}
        <div className="decision-card">
          <div className="decision-header">
            ✅ <span>AI DECISION COMPLETE</span>
            <h2>Optimal Hospital Selected</h2>
          </div>

          <div className="decision-main">
            <h1>City General Hospital</h1>

            <div className="decision-stats">
              <div>
                <strong>3.2 km</strong>
                <span>Distance</span>
              </div>
              <div>
                <strong>12</strong>
                <span>Beds Available</span>
              </div>
              <div className="good">
                <strong>Yes</strong>
                <span>ICU Ready</span>
              </div>
            </div>
          </div>

          <div className="decision-reason">
            <h4>🛡 Why This Hospital Was Selected</h4>
            <ul>
              <li>Specialized in cardiac emergency care</li>
              <li>12 beds currently available</li>
              <li>Closest suitable facility (3.2 km)</li>
              <li>Highly rated emergency department</li>
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="actions">
          <button className="secondary" onClick={() => navigate("/result")}>
            ← Back to Triage
          </button>
          <button className="primary green" onClick={() => navigate("/route")}>
            Confirm & Dispatch →
          </button>
        </div>
      </div>
    </div>
  );
}
