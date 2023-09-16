import React from "react";
import "./../styles/homestats.css"; // Import the CSS file

const Homestats = (props) => {
  props.fetchData();
  return (
    <div className="main">
      <h1>
        Welcome to <span className="highlight">i</span>Notebook
      </h1>
      <p>
        {" "}
        Your digital note-taking companion!{" "}
        <span className="highlight">iNotebook</span> is a feature-rich MERN
        (MongoDB, Express, React, Node.js) application designed to help you
        organize your thoughts, tasks, and ideas with ease.
      </p>

      <p>
        Total accounts on <span className="highlight">iNotebook</span>:{" "}
        <span className="highlight">{props.total.userCount}</span>
      </p>
      <p>
        Total Notes on <span className="highlight">iNotebook</span>:{" "}
        <span className="highlight">{props.total.noteCount}</span>
      </p>
    </div>
  );
};

export default Homestats;
