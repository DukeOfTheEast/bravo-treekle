import "./App.css";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import History from "../src/components/History";
import Rewards from "./components/Rewards";

function App() {
  return (
    <div className="app">
      {/* <Login /> */}
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="rewards" element={<Rewards />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
