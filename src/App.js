// import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";
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
import Homestats from "./components/Homestats";

// import Alert from "./components/Alert";

function App() {
  const [totalStats, setTotalStats] = useState({ userCount: 0, noteCount: 0 });
  async function fetchData() {
    try {
      const response = await fetch(
        `https://notetaker-yzz5.onrender.com/api/user/getcount`
      );
      const data = await response.json();

      setTotalStats(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    window.addEventListener("beforeunload", function (e) {
      localStorage.clear();
    });

    fetchData();

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
              <Route
                path="/"
                element={<Homestats total={totalStats} fetchData={fetchData} />}
              />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
