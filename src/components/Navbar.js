import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./../styles/Navbar.css";

const Navbar = () => {
  let location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          iNotebook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li
              className={`nav-item ${
                location.pathname === "/home" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/user" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/user">
                User
              </Link>
            </li>

            {localStorage.getItem("token") ? (
              <li
                className={`nav-item ${
                  location.pathname === "/logout" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
            ) : (
              <>
                <li
                  className={`nav-item ${
                    location.pathname === "/signup" ? "active" : ""
                  }`}
                >
                  <Link className="nav-link" to="/signup">
                    Sign up
                  </Link>
                </li>

                <li
                  className={`nav-item ${
                    location.pathname === "/login" ? "active" : ""
                  }`}
                >
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
