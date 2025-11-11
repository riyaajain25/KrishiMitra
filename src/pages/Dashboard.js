import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation
import "../styles/Dashboard.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import logo from "../assets/logo.jpg";

function Dashboard() {
  const messages = [
    "Connecting Farmers and Agriculture Officials",
    "Bridging the gap for better decisions",
    "Empowering farmers with technology"
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Navbar */}
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
            
            <li><Link to="/about">About</Link></li> {/* ✅ About link */}

          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="left-side">
          <img src={img1} alt="Top" className="top-image" />
          <div className="bottom-images">
            <img src={img2} alt="Image 1" />
            <img src={img3} alt="Image 2" />
          </div>
        </div>

        <div className="right-side">
          {/* Changing Text Box */}
          <div className="text-box">
            <h1>{messages[currentMessage]}</h1>
            <p>
              Bridging the gap between farmers and the agriculture department
              for efficient decision-making and better resource allocation.
            </p>
          </div>

          {/* Fixed Quote Box */}
          <div className="text-box quote-box">
            <h2>
              "The farmer is the only man in our economy who buys everything at retail,
              sells everything at wholesale, and pays the freight both ways." 🌱
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
