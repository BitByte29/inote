// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import User from "./components/User";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="Data added" />
          <div className="container ">
            <h1>Welcome to iNotebook</h1>

            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/user" element={<User />} />
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<>This is nothing</>} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
