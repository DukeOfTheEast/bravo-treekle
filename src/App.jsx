import "./App.css";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import History from "../src/components/History";
import Rewards from "./components/Rewards";
import Support from "./components/Support";
import Customer from "./components/Customer";

function App() {
  return (
    <div className="app">
      {/* <Login /> */}
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="rewards" element={<Rewards />} />
        <Route path="support" element={<Support />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="history" element={<History />} />
        <Route path="customer" element={<Customer />} />
      </Routes>
    </div>
  );
}

export default App;
