export default function RoutingComplete() {
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
              <span>3.2 km • ~8 min</span>
            </div>
  
            <iframe
              title="route-map"
              src="https://www.google.com/maps?q=City%20General%20Hospital&output=embed"
              width="100%"
              height="320"
              style={{ border: "none" }}
              loading="lazy"
            ></iframe>
  
            <div className="map-footer">
              <span className="dot red">●</span> Current Location
              <span className="dot green">●</span> City General Hospital
            </div>
          </div>
  
          <p className="gps">📡 GPS location acquired</p>
  
          {/* Info Cards */}
          <div className="info-grid">
            {/* Patient Status */}
            <div className="info-card">
              <h4>🫀 Patient Status</h4>
              <p>
                Severity Level <span className="pill mild">MILD</span>
              </p>
              <p>Severity Score <strong>33 / 100</strong></p>
              <p>Emergency Type <strong>Cardiac</strong></p>
              <p>Patient Age <strong>56 years</strong></p>
            </div>
  
            {/* Assigned Hospital */}
            <div className="info-card">
              <h4>🏥 Assigned Hospital</h4>
              <h3>City General Hospital</h3>
  
              <div className="mini-stats">
                <div>
                  <strong>3.2 km</strong>
                  <span>Distance</span>
                </div>
                <div>
                  <strong>~8 min</strong>
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
              Critical routing decision completed in under
              <strong> 10 seconds</strong>
            </p>
  
            <div className="ai-stats">
              <div>
                <strong>33</strong>
                <span>Severity Score</span>
              </div>
              <div>
                <strong>12</strong>
                <span>Beds Available</span>
              </div>
              <div>
                <strong>~8</strong>
                <span>Minutes to Hospital</span>
              </div>
            </div>
          </div>
  
          {/* Action */}
          <button className="primary big green">
            🚑 Dispatch Ambulance →
          </button>
        </div>
      </div>
    );
  }
  