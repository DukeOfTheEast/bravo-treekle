import "./App.css";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../src/components/Dashboard";

function App() {
  return (
    <div className="app">
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
