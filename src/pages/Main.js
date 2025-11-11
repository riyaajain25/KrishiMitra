import React from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";
import welcomevideo from "../assets/welcomevideo.mp4"; // ✅ import your video file

function Main() {
  return (
    <div className="main-container">
      {/* ✅ Background video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src={welcomevideo} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Title */}
      <h1 className="title">K R I S H I M I T R A</h1>

      {/* Buttons */}
      <div className="button-box">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/signup" className="btn">Sign Up</Link>
      </div>
    </div>
  );
}

export default Main;
