import React, { useContext, useEffect } from "react";
import noteContext from "./../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

function Notes() {
  const context = useContext(noteContext);
  const { notes, getAllNotes } = context;
  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <>
      <AddNote />
      <h2>Your notes: {notes.length}</h2>
      <div className="row">
        {notes.map((note) => {
          return <NoteItem note={note} key={note._id} />;
        })}
      </div>
    </>
  );
}

export default Notes;
