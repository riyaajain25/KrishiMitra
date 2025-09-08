import React, { useState } from "react";
import "../styles/Signup.css";
import md5 from "crypto-js/md5"; // ✅ import MD5

function Signup() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // ✅ error state

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(""); // reset previous error

    // ✅ Password regex: min 6 chars, letters + numbers
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters and include both letters and numbers."
      );
      return;
    }

    // ✅ MD5 hash the password
    const hashedPassword = md5(password).toString();

    const user = { username, email, password: hashedPassword };

    try {
      const response = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.text(); // use text(), not json()
      if (response.ok) {
        alert(data); // "User registered successfully!"
        window.location.href = "/login";
      } else {
        alert("Signup failed: " + data); // backend error string
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-box">
        <h2>Create Account 🌱</h2>
        <p>Join KrishiMitra</p>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* ✅ show password error */}
          {error && <p style={{ color: "red" }}>{error}</p>}

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
