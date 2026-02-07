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

  // FORM STATE
  const [age, setAge] = useState("");
  const [emergencyType, setEmergencyType] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [oxygen, setOxygen] = useState("");
  const [notes, setNotes] = useState("");

  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleSymptom = (symptom) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  // SUBMIT → BACKEND
  const handleSubmit = async () => {
    if (!heartRate || !oxygen) {
      alert("Please enter heart rate and oxygen level");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/triage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            heartRate: Number(heartRate),
            oxygen: Number(oxygen),
            age,
            emergencyType,
            symptoms: selectedSymptoms,
            notes
          })
        }
      );

      const data = await response.json();

      navigate("/result", {
        state: {
          ...data,
          age,
          emergencyType,
          heartRate,
          oxygen,
          symptoms: selectedSymptoms
        }
      });
    } catch (err) {
      alert("Backend error. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
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
            <input
              type="number"
              placeholder="Patient Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

            <select
              value={emergencyType}
              onChange={(e) => setEmergencyType(e.target.value)}
            >
              <option value="">Emergency Type</option>
              <option value="Cardiac">Cardiac Emergency</option>
              <option value="Accident">Accident</option>
              <option value="Respiratory">Respiratory</option>
            </select>
          </div>
        </div>

        {/* Vitals */}
        <div className="card">
          <h3>Vital Signs</h3>
          <div className="grid-2">
            <input
              type="number"
              placeholder="Heart Rate (BPM)"
              value={heartRate}
              onChange={(e) => setHeartRate(e.target.value)}
            />
            <input
              type="number"
              placeholder="Oxygen Saturation (%)"
              value={oxygen}
              onChange={(e) => setOxygen(e.target.value)}
            />
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
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        {/* Action */}
        <button
          className="primary big"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "⚡ Assess Emergency →"}
        </button>
      </div>
    </div>
  );
}
