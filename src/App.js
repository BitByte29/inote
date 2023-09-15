// import logo from './logo.svg';
import "./App.css";
import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import User from "./components/User";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import Alert from "./components/Alert";

// import Alert from "./components/Alert";

function App() {
  useEffect(() => {
    window.addEventListener("beforeunload", function (e) {
      localStorage.clear();
    });

    return () => {
      window.removeEventListener("beforeunload", function (e) {
        localStorage.clear();
      });
    };
  }, []);

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert />
          <div className="container ">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/user" element={<User />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/" element={<>Welcome to iNotebook</>} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
