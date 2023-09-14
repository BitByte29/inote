import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:3001";
  const [notes, setNotes] = useState([]);

  const getAllNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMDczM2M3NjBmOWE1NDk0OTBiOGVmIn0sImlhdCI6MTY5NDY2NTMwOX0.4xcvVCCj7PI7oizzZb2FJJSxXlfAK1KEDQsj1RDP3hQ",
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
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMDczM2M3NjBmOWE1NDk0OTBiOGVmIn0sImlhdCI6MTY5NDY2NTMwOX0.4xcvVCCj7PI7oizzZb2FJJSxXlfAK1KEDQsj1RDP3hQ",
        },
        body: JSON.stringify({ title, description, tag }),
      });
      //Return the object of when new note is created which has status and data
      if (response.status !== 200) {
        console.log(response.status);
        console.log(await response.json());
      } else {
        const newNote = await response.json();
        setNotes(notes.concat(newNote.data));
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
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMDczM2M3NjBmOWE1NDk0OTBiOGVmIn0sImlhdCI6MTY5NDY2NTMwOX0.4xcvVCCj7PI7oizzZb2FJJSxXlfAK1KEDQsj1RDP3hQ",
      },
    });
    console.log("Deleted item with ", id);
  };

  const editNote = async (id, title, description, tag) => {
    for (let i = 0; i < notes.length; i++) {
      if (notes[i]._id === id) {
        notes[i].title = title;
        notes[i].description = description;
        notes[i].tag = tag;
      }
    }
    // const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "auth-token": "",
    //   },
    //   body: JSON.stringify(data),
    // });
    // console.log(response.json());
    setNotes(notes);
  };

  //Delete
  //Edit
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getAllNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
