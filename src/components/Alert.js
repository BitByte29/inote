import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";

const Alert = (props) => {
  const context = useContext(NoteContext);
  const { alert, removeAlert } = context;

  useEffect(() => {
    if (alert.message) {
      // Set a timer to remove the alert after a specified time (e.g., 3000 milliseconds or 3 seconds)
      const timer = setTimeout(() => {
        removeAlert(); // Call a function to remove the alert
      }, 3000); // Adjust the time as needed

      // Clean up the timer when the component unmounts to prevent memory leaks
      return () => clearTimeout(timer);
    }
  }, [alert.message, removeAlert]);

  return (
    <div
      className={`alert alert-${alert.type} `}
      style={{ height: "3.5rem" }}
      role="alert"
    >
      {alert.message}
    </div>
  );
};

export default Alert;
