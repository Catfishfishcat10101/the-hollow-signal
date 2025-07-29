import { Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Zone from "./pages/Zone";
import Ending from "./pages/Ending";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/forest" element={<Zone zoneId="forest" />} />
      <Route path="/church" element={<Zone zoneId="church" />} />
      <Route path="/tower" element={<Zone zoneId="tower" />} />
      <Route path="/ending" element={<Ending />} />
      </Routes>
  );
}