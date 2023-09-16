import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../context/notes/NoteContext";
// import SignupStyle from "./../styles/Signupstyle.css";
import "./../styles/form.css";
const Signup = () => {
  const context = useContext(NoteContext);
  const { setTheAlert } = context;
  const [type, setType] = useState("password");

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
    const { name, email, password, cpassword } = credentials;
    const response = await fetch(`http://localhost:3001/api/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, cpassword }),
    });
    if (password !== cpassword) {
      setTheAlert("Password does not match", "danger");
      return;
    }
    const json = await response.json();
    if (response.status === 200) {
      console.log("User created");
      console.log(credentials);
      naviagate("/login");
    } else {
      setTheAlert(json.message, "danger");
    }
  };

  return (
    <>
      <div className="formdiv">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-element">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={onChange}
              name="name"
              aria-describedby="emailHelp"
              //placeholder="Enter Name"
              autoFocus
            />
          </div>
          <div className="form-element">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              onChange={onChange}
              name="email"
              aria-describedby="emailHelp"
              //placeholder="Enter email"
            />
          </div>
          <div className="form-element">
            <label
              htmlFor="password"
              className="d-flex"
              style={{ justifyContent: "space-between", width: "100%" }}
            >
              Password{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() =>
                  type !== "text" ? setType("text") : setType("password")
                }
              >
                {type !== "text" ? "View" : "Hide"}
              </span>
            </label>
            <input
              type={type}
              onChange={onChange}
              id="password"
              name="password"
              //placeholder="Password"
              autoComplete="new-password"
            />
          </div>
          <div className="form-element">
            <label
              htmlFor="password"
              className="d-flex"
              style={{ justifyContent: "space-between", width: "100%" }}
            >
              Password{" "}
            </label>
            <input
              onChange={onChange}
              type={type}
              id="cpassword"
              name="cpassword"
              //placeholder="Password"
              autoComplete="new-password"
            />
          </div>
          <div className="form-element">
            <button type="submit" className="btn btn-success">
              Signup
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
