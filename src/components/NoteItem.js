import React, { useContext } from "react";
import noteContext from "./../context/notes/NoteContext";
import "./../styles/noteitem.css";

function NoteItem(props) {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  const getDateTime = (dateFromDB) => {
    const date = new Date(dateFromDB);
    const day = date.toDateString();
    const time =
      " at " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();
    return day + time;
  };

  return (
    <>
      {/* <div className="col-md-12 my-3"> */}
      <div className="card my-3">
        <div className="card-body">
          <div className="top-part">
            <h4 className="title">{note.title}</h4>
            {note.tag && <p className="tag">{note.tag}</p>}
          </div>
          <p>{note.description}</p>
          <div className="bottom-part">
            <div className="buttons">
              <i
                className="fas fa-edit mx-2"
                onClick={() => updateNote(note)}
              ></i>

              <i
                className="far fa-trash-alt mx-2"
                onClick={() => deleteNote(note._id)}
              ></i>
            </div>
            <p className="small">
              <span className="timeframe">Created at: </span>
              {getDateTime(note.date)}
            </p>
          </div>
          {note.editdate ? (
            <p className="small edited">
              {" "}
              <span className="timeframe">Edited at:</span>{" "}
              {getDateTime(note.editdate)}
            </p>
          ) : null}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default NoteItem;
