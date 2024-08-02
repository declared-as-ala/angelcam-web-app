// src/Login.js
import React, { useState } from "react";
import { useUser } from "./context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [pat, setPat] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: pat }),
      });

      if (!response.ok) {
        throw new Error("Authentication failed");
      }

      const data = await response.json();
      localStorage.setItem("PAToken", pat);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user); // Update the context

      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-section">
      <div className="title">
        <h2>Login</h2>
        <div className="title-underline"></div>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="pat">Personal Access Token</label>
          <input
            type="text"
            id="pat"
            value={pat}
            onChange={(e) => setPat(e.target.value)}
            required
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </section>
  );
};

export default Login;
