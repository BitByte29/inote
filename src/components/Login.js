import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let naviagate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = async (email, password) => {
    const response = await fetch(`http://localhost:3001/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    if (response.status === 200) {
      localStorage.setItem("token", json.token);
      naviagate("/home");
    } else {
      // Alert
      alert("not good");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials.email, credentials.password);
  };
  return (
    <div className="container my-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            onChange={onChange}
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={onChange}
            className="form-control password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
