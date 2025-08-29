import React from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";  // make sure path is correct

function Main() {
  return (
    <div className="main-container">
      <div className="overlay"></div>
      <h1 className="title">K R I S H I M I T R A</h1>
      <div className="button-box">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/signup" className="btn">Sign Up</Link>
      </div>
    </div>
  );
}

export default Main;
