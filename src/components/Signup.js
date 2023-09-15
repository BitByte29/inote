import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let naviagate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    naviagate("/login");
  };

  return (
    <div className="container my-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={onChange}
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={onChange}
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Password</label>
          <input
            onChange={onChange}
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-success">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
