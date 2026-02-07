import { useState } from "react";
import { useNavigate } from "react-router-dom";

const symptomsList = [
  "Chest Pain",
  "Shortness of Breath",
  "Severe Bleeding",
  "Loss of Consciousness",
  "Severe Pain",
  "Dizziness",
  "Numbness",
  "Difficulty Speaking",
  "High Fever",
  "Vomiting",
  "Seizures",
  "Confusion"
];

export default function EmergencyIntake() {
  const navigate = useNavigate();

  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const toggleSymptom = (symptom) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  return (
    <div className="page">
      {/* Header */}
      <header className="topbar">
        <div className="logo">
          ⚡ AI Emergency Triage
          <small>Rapid Assessment System</small>
        </div>
        <div className="status">● System Ready</div>
      </header>

      <div className="content">
        <h1>Emergency Intake</h1>
        <p className="subtitle">
          Enter patient vitals for AI-powered triage assessment
        </p>

        {/* Patient Info */}
        <div className="card">
          <h3>Patient Information</h3>
          <div className="grid-2">
            <input type="number" placeholder="Patient Age" />
            <select>
              <option>Emergency Type</option>
              <option>Cardiac Emergency</option>
              <option>Accident</option>
              <option>Respiratory</option>
            </select>
          </div>
        </div>

        {/* Vitals */}
        <div className="card">
          <h3>Vital Signs</h3>
          <div className="grid-2">
            <input type="number" placeholder="Heart Rate (BPM)" />
            <input type="number" placeholder="Oxygen Saturation (%)" />
          </div>
        </div>

        {/* Symptoms */}
        <div className="card">
          <h3>Symptoms</h3>

          <div className="symptom-grid">
            {symptomsList.map((symptom) => (
              <button
                key={symptom}
                type="button"
                className={
                  selectedSymptoms.includes(symptom)
                    ? "symptom-chip active"
                    : "symptom-chip"
                }
                onClick={() => toggleSymptom(symptom)}
              >
                {symptom}
              </button>
            ))}
          </div>

          <textarea
            className="notes"
            placeholder="Additional notes (optional)..."
          />
        </div>

        {/* Action */}
        <button
          className="primary big"
          onClick={() => navigate("/result")}
        >
          ⚡ Assess Emergency →
        </button>
      </div>
    </div>
  );
}
