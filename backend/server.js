const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

/**
 * Dummy hospital data (Prototype)
 * Real system → live hospital dashboards / govt APIs
 */
const hospitals = [
  {
    name: "City General Hospital",
    icu: true,
    ventilator: true,
    beds: 2,
    distance: 3.2
  },
  {
    name: "Metro Health Center",
    icu: false,
    ventilator: false,
    beds: 6,
    distance: 1.8
  },
  {
    name: "St. Mary’s Medical College",
    icu: true,
    ventilator: true,
    beds: 1,
    distance: 5.5
  },
  {
    name: "Apollo Emergency Unit",
    icu: true,
    ventilator: false,
    beds: 3,
    distance: 4.1
  },
  {
    name: "Fortis Multi-Speciality Hospital",
    icu: true,
    ventilator: true,
    beds: 4,
    distance: 6.0
  },
  {
    name: "Government District Hospital",
    icu: false,
    ventilator: false,
    beds: 10,
    distance: 2.5
  }
];

/**
 * AI TRIAGE (Rule-based AI)
 */
function triageAI(data) {
  const { heartRate, oxygen } = data;

  if (oxygen < 85 || heartRate > 130) {
    return "Critical";
  }

  if (oxygen < 92) {
    return "Moderate";
  }

  return "Stable";
}

/**
 * Hospital Selection Engine
 */
function selectHospital(severity) {
  let suitableHospitals = [];

  if (severity === "Critical") {
    suitableHospitals = hospitals.filter(
      h => h.icu && h.ventilator && h.beds > 0
    );
  } else if (severity === "Moderate") {
    suitableHospitals = hospitals.filter(
      h => h.icu && h.beds > 0
    );
  } else {
    suitableHospitals = hospitals.filter(h => h.beds > 0);
  }

  // Sort by nearest hospital
  suitableHospitals.sort((a, b) => a.distance - b.distance);

  return suitableHospitals[0];
}

/**
 * API Endpoint
 */
app.post("/triage", (req, res) => {
  const severity = triageAI(req.body);
  const hospital = selectHospital(severity);

  res.json({
    severity,
    hospital,
    allHospitals: hospitals, // useful for UI if you want later
    message: "Hospital selected based on real-time readiness"
  });
});

/**
 * Start Server
 */
app.listen(5050, () => {
  console.log("🚑 LifeLine AI Backend running on http://localhost:5050");
});
