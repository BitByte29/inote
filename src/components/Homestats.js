import React, { useEffect } from "react";
import "./../styles/homestats.css"; // Import the CSS file

const Homestats = (props) => {
  props.fetchData();
  useEffect(() => {
    props.fetchData();
    // eslint-disable-next-line
  }, []);

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
        Using iNotebook , you can create a free account and add your notes, edit
        your notes and delete your notes. iNotebook provides user authtication
        and security, so that your notes are always safe.
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
