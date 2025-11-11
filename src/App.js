import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import FinancePlanner from "./pages/FinancePlanner"; // ✅ import added
import Schemes from "./pages/Schemes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/financial-status" element={<FinancePlanner />} /> {/* ✅ Added this */}
        <Route path="/schemes" element={<Schemes />} />
      </Routes>
    </Router>
  );
}

export default App;
