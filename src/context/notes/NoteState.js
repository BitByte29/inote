import { useState } from "react";
import NoteContext from "./NoteContext";
// import token from "./../users/UserContext";

const NoteState = (props) => {
  const host = "http://127.0.0.1:3001";
  const [user, setUser] = useState("");
  const [notes, setNotes] = useState([]);
  const [errors, setErrors] = useState("");
  const [userDetails, setUserDetails] = useState(null);

  const [alert, setAlert] = useState({
    message: "",
    type: "",
  });

  const setTheAlert = (message, type) => {
    setAlert({ message, type });
  };
  const removeAlert = () => {
    setAlert({
      message: "",
      type: "",
    });
  };

  // const token = localStorage.getItem("token");
  const getAllNotes = async () => {
    const token = localStorage.getItem("token");

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    //Response returns array of all notes
    const data = await response.json();
    // console.log(json);
    setNotes(data);
  };

  //Add a note
  const addNote = async (title, description, tag = "default") => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({ title, description, tag }),
      });
      //Return the object of when new note is created which has status and data
      let json = await response.json();
      if (response.status !== 201) {
        setErrors(json.message);
        setAlert({
          message: json.message,
          type: "danger",
        });
        console.log(errors);
      } else {
        const newNote = json;
        setNotes(notes.concat(newNote.data));
        setAlert({
          message: "Note added successfully",
          type: "success",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteNote = async (id) => {
    const token = localStorage.getItem("token");

    const newList = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newList);
    await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    console.log("Deleted item with ", id);
    setAlert({
      message: "Note deleted",
      type: "warning",
    });
  };

  const editNote = async (id, title, description, tag, editdate) => {
    const token = localStorage.getItem("token");

    const newNotes = JSON.parse(JSON.stringify(notes));
    for (let i = 0; i < newNotes.length; i++) {
      if (newNotes[i]._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        newNotes[i].editdate = editdate;
        console.log(newNotes);
      }
    }
    setNotes(newNotes);
    await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify({ title, description, tag, editdate }),
    });
    setAlert({
      message: "Note Edited",
      type: "primary",
    });
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        editNote,
        getAllNotes,
        user,
        setUser,
        userDetails,
        setUserDetails,
        alert,
        setTheAlert,
        removeAlert,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
