import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../context/notes/NoteContext";
const Signup = () => {
  const context = useContext(NoteContext);
  const { setTheAlert } = context;

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  let naviagate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch(`http://localhost:3001/api/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    if (response.status === 200) {
      console.log("User created");
      console.log(credentials);
      naviagate("/login");
    } else {
      console.log(json);
      // setAlert()
      setTheAlert(json.message, "danger");
    }
  };

  return (
    <div className="container my-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={onChange}
            name="name"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
          />
        </div>
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
            id="cpassword"
            name="cpassword"
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
