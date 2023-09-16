import React from "react";

// Define CSS styles as an object
const styles = {
  aboutContainer: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "transparent",
    borderRadius: "10px",
    // boxShadow: "0px 0px 10px rgba(255, 255, 255, .5)",
  },
  heading: {
    fontSize: "2rem",
    color: "#fff",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    color: "#A5D7E8",
    marginBottom: "15px",
  },
  subheading: {
    fontSize: "1.5rem",
    color: "#fff",
    marginTop: "30px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  listContainer: {
    marginLeft: "20px",
    paddingLeft: "20px",
  },
  listItem: {
    fontSize: "1.2rem",
    lineHeight: "1.4",
    color: "#000",
    marginBottom: "8px",
  },
  highlightedText: {
    color: "#FFF", // Change to your desired highlight color
    fontWeight: "bold",
  },
};

const About = () => {
  return (
    <div style={styles.aboutContainer}>
      <h1 style={styles.heading}>
        ABOUT <span style={styles.highlightedText}>iNOTEBOOK</span>
      </h1>
      <p style={styles.paragraph}>
        Welcome to <span style={styles.highlightedText}>iNotebook</span>, your
        digital note-taking companion!{" "}
        <span style={styles.highlightedText}>iNotebook</span> is a feature-rich
        MERN (MongoDB, Express, React, Node.js) application designed to help you
        organize your thoughts, tasks, and ideas with ease.
      </p>
      <p style={styles.paragraph}>
        Whether you're a student, professional, or anyone looking for a
        convenient way to keep track of information,{" "}
        <span style={styles.highlightedText}>iNotebook</span> is here to
        simplify your life. Start using{" "}
        <span style={styles.highlightedText}>iNotebook</span> today and
        experience the benefits of efficient note-taking.
      </p>
      <h2 style={styles.subheading}>Key Features:</h2>
      <p style={styles.paragraph}>
        With <span style={styles.highlightedText}>iNotebook</span>, you can
        create, edit, and manage your notes from anywhere, whether you're at
        home, in the office, or on the go. Our user-friendly interface make it a
        breeze to stay organized and boost your productivity.
      </p>
    </div>
  );
};

export default About;
