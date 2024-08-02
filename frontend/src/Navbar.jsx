// src/Navbar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./context";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("PAToken");

    // Update context
    setUser(null);

    // Redirect to login page
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Camera</div>
        <ul className="navbar-menu">
          {user && (
            <li className="navbar-logo">
              <span>Hi ! {`${user.first_name} ${user.last_name}`}</span>
              <hr /> <hr /> <hr />
              <div className="dropdown">
                <button className="btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
