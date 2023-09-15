// import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

//Added active class based using useLocation Hook / useEffect to display the location.pathname when location is changes
const Navbar = () => {
  let location = useLocation();
  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location]);
  return (
    <div>
      <nav
        className="navbar  navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link  ${
                    location.pathname === "/home" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/home"
                >
                  {" "}
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link  ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link  ${
                    location.pathname === "/user" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/user"
                >
                  User
                </Link>
              </li>
            </ul>

            {localStorage.getItem("token") ? (
              <div>
                <Link className="btn btn-primary mx-2" to="/logout">
                  Logout
                </Link>
              </div>
            ) : (
              <div className="d-flex ">
                <Link className="btn btn-warning mx-2" to="/signup">
                  Sign up
                </Link>
                <Link className="btn btn-success mx-2" to="/login">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
