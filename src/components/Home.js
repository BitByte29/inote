// import React from "react";
import Notes from "./Notes";
import NoteContext from "../context/notes/NoteContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
export default function Home() {
  let context = useContext(NoteContext);
  const { user } = context;
  //Checking if localStorage has the token if not that means it is not there
  return localStorage.getItem("token") ? (
    <div>
      <h3>Hello {user}, Welcome to iNotebook.</h3>
      <Notes />
    </div>
  ) : (
    <div className="">
      <h2>Login to start using you cloud notebook..</h2>
      <Link to={"/login"}>Login Here</Link>
      <h3>Do not have an account?</h3>
      <Link to={"/signup"}>Sign Up Here</Link>
    </div>
  );
}
