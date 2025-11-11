import React from "react";
import { Link } from "react-router-dom";
import "../styles/Schemes.css";
import "../styles/Dashboard.css"; // ✅ for navbar styling
import farmerImg from "../assets/farmerssss.png";
import logo from "../assets/logo.jpg";

const schemes = [
  {
    title: "PM-Kisan Samman Nidhi",
    description: "Provides ₹6,000 yearly to small and marginal farmers.",
    link: "https://pmkisan.gov.in/",
  },
  {
    title: "Pradhan Mantri Fasal Bima Yojana",
    description: "Crop insurance to protect farmers from yield losses.",
    link: "https://pmfby.gov.in/",
  },
  {
    title: "Soil Health Card Scheme",
    description: "Gives soil nutrient info to improve productivity.",
    link: "https://soilhealth.dac.gov.in/",
  },
];

const Schemes = () => {
  return (
    <div className="schemes-fullscreen">
      {/* ✅ Navbar inserted directly here */}
      <div className="navbar-container">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo-image" />
          <span className="brand-name">KRISHIMITRA</span>
        </div>
        <nav>
          <ul>
            <li><Link to="/dashboard">Home</Link></li>
            <li><Link to="/crop-prediction">Crop Prediction</Link></li>
            <li><Link to="/financial-status">Finance Planner</Link></li>
            <li><Link to="/schemes">Schemes</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>

      {/* ✅ Main Schemes Section */}
      <div className="schemes-wrapper">
        <div className="schemes-left">
          <img src={farmerImg} alt="Farmer" className="farmer-image" />
        </div>

        <div className="schemes-right">
          <h2 className="schemes-heading">Government Schemes for Farmers</h2>
          <div className="schemes-list">
            {schemes.map((scheme, index) => (
              <div
                key={index}
                className="scheme-box"
                onClick={() => window.open(scheme.link, "_blank")}
              >
                <h3>{scheme.title}</h3>
                <p>{scheme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schemes;
