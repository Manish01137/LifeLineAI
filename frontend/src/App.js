import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import EmergencyIntake from "./pages/EmergencyIntake";
import TriageResult from "./pages/TriageResult";
import HospitalAssignment from "./pages/HospitalAssignment";
import RoutingComplete from "./pages/RoutingComplete";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmergencyIntake />} />
        <Route path="/result" element={<TriageResult />} />
        <Route path="/hospitals" element={<HospitalAssignment />} />
        <Route path="/route" element={<RoutingComplete />} />
      </Routes>
    </Router>
  );
}

export default App;
