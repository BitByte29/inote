import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "");
    navigate("/");
  };
  return (
    <div className="container">
      <h2>Do you want to logout? </h2>
      <button className="btn btn-danger" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
