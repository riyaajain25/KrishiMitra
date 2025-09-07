import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  // ✅ State for inputs and error messages
  const [username, setUsername] = useState(""); // backend expects username
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // reset previous error

    const user = { username, password };

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const message = await response.text();

      if (response.ok) {
        // ✅ Successful login → navigate
        alert(message); // optional, show "Login successful!"
        navigate("/dashboard");
      } else {
        // ❌ Login failed → show error
        setError(message);
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to connect to server");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Welcome Back 👋</h2>
        <p>Login to KrishiMitra</p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>

        {/* ✅ Display error below the form */}
        {error && <p className="error-message">{error}</p>}

        <p className="switch-text">
          Don’t have an account?{" "}
          <span
            className="link"
            onClick={() => navigate("/signup")}
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
