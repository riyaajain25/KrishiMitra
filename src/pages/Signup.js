import React from "react";
import "../styles/Signup.css";

function Signup() {
  return (
    <div className="signup-page">
      <div className="signup-box">
        <h2>Create Account 🌱</h2>
        <p>Join KrishiMitra</p>

        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Signup</button>
        </form>

        <p className="switch-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
