import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../context/notes/NoteContext";
import "./../styles/form.css";
const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let context = useContext(NoteContext);
  const { setUser, setTheAlert, setUserDetails, host } = context;
  let naviagate = useNavigate();

  const [type, setType] = useState("password");

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = async (email, password) => {
    const response = await fetch(`${host}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();

    if (response.status !== 200) {
      // return alert(json.message);
      setTheAlert("Invalid credentials", "danger");
      return;
    }
    if (response.status === 200) {
      localStorage.setItem("token", json.token);
      setTheAlert("Logged in Successfully", "success");
      let token = localStorage.getItem("token");
      const detailsres = await fetch(`${host}/api/user/getuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });
      let json2 = await detailsres.json();
      setUser(json2.name);
      setUserDetails(json2);
      naviagate("/home");
    } else {
      setTheAlert("Invalid credentials", "danger");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials.email, credentials.password);
  };
  return (
    <>
      <div className="formdiv">
        <form onSubmit={handleSubmit}>
          <div className="form-element">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              onChange={onChange}
              className=""
              id="email"
              name="email"
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
              className=""
              id="password"
              name="password"
              //placeholder="Password"
              autoComplete="new-password"
            />
          </div>
          <div className="form-element">
            <button className="btn btn-success">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
