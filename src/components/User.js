import React, { useContext } from "react";
import NoteContext from "./../context/notes/NoteContext";

export default function User() {
  const context = useContext(NoteContext);

  const { userDetails, notes } = context;
  return localStorage.getItem("token") ? (
    <div>
      <h1>Current User details</h1>
      <h4>Name: {userDetails.name}</h4>
      <h4>Email: {userDetails.email}</h4>
      <h4>Joined At: {userDetails.date.slice(0, 10)}</h4>
      <h4>Total Notes: {notes.length}</h4>
    </div>
  ) : (
    <p>Login to get user Statistics.</p>
  );
}
