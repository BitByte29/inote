import React, { useContext } from "react";
import noteContext from "./../context/notes/NoteContext";

function NoteItem(props) {
  const context = useContext(noteContext);
  const { deleteNote, editNote } = context;
  const { note } = props;

  return (
    <>
      <div className="col-md-3 my-3 mx-auto">
        <div className="card">
          <div className="card-body">
            <h4>{note.title}</h4>
            <p>{note.description}</p>
            <i className="fas fa-edit mx-2"></i>
            <i
              className="far fa-trash-alt mx-2"
              onClick={() => deleteNote(note._id)}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoteItem;
