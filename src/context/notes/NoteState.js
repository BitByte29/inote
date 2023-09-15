import { useState } from "react";
import NoteContext from "./NoteContext";
// import token from "./../users/UserContext";

const NoteState = (props) => {
  const host = "http://localhost:3001";
  const [notes, setNotes] = useState([]);
  const [errors, setErrors] = useState("");
  // const defaultAuth = token;
  const token = localStorage.getItem("token");
  const getAllNotes = async () => {
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
      if (response.status !== 201) {
        let json = await response.json();
        setErrors(json.message);
        console.log(errors);
      } else {
        const newNote = await response.json();
        setNotes(notes.concat(newNote.data));
        setErrors("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteNote = async (id) => {
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
  };

  const editNote = async (id, title, description, tag) => {
    const newNotes = JSON.parse(JSON.stringify(notes));
    for (let i = 0; i < newNotes.length; i++) {
      if (newNotes[i]._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
      }
    }
    setNotes(newNotes);
    await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify({ title, description, tag }),
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
        errors,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
