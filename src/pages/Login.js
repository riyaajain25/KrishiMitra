import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigation
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate(); // ✅ hook to navigate

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ For now, just redirect to Dashboard (no backend check yet)
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Welcome Back 👋</h2>
        <p>Login to KrishiMitra</p>

        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>

        <p className="switch-text">
          Don’t have an account?{" "}
          <span
            className="link"
            onClick={() => navigate("/signup")} // ✅ navigate to signup
            style={{ cursor: "pointer", color: "#ff80ab" }}
          >
            Signup
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
