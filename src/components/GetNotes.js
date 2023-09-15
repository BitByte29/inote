import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "./../context/notes/NoteContext";
import NoteItem from "./NoteItem";
// import { useNavigate } from "react-router-dom";

const GetNotes = () => {
  const context = useContext(noteContext);
  // const navigate = useNavigate();
  const { notes, getAllNotes, editNote } = context;
  useEffect(() => {
    getAllNotes();
    // eslint-disable-next-line
  }, []);

  const [enote, setEnote] = useState({
    _id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    // console.log(enote._id, enote.etitle, enote.edescription, enote.etag);
    editNote(enote._id, enote.etitle, enote.edescription, enote.etag);
    refClose.current.click();
  };

  const onChange = (e) => {
    setEnote({ ...enote, [e.target.name]: e.target.value });
  };

  //when a dom element is set as ref using hook they can be directly accessed to do thing, here click on the current ref obj
  const ref = useRef(null);
  const refClose = useRef(null);
  const updateNote = (currentNote) => {
    ref.current.click();
    setEnote({
      _id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>
      <div
        className="modal"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* _______________Form_________________ */}

              <form>
                <div className="form-group my-3">
                  <label htmlFor="title">Edit Title</label>
                  <input
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    placeholder="Enter Title"
                    value={enote.etitle}
                    minLength={5}
                    required
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="description">Edit description</label>
                  <input
                    onChange={onChange}
                    type="text"
                    className="form-control "
                    id="edescription"
                    name="edescription"
                    placeholder="Enter description"
                    value={enote.edescription}
                    minLength={5}
                    required
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="tag">Edit Tag</label>
                  <input
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    placeholder="Enter Tag"
                    value={enote.etag}
                  />
                </div>
              </form>

              {/* _______________Form_________________ */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      <h2>
        Your notes: {notes.length === 0 ? "No notes to display" : notes.length}
      </h2>

      <div className="row">
        {notes.map((note) => {
          return (
            <NoteItem note={note} key={note._id} updateNote={updateNote} />
          );
        })}
      </div>
      {/* {Array.isArray(notes) ? (
        notes.map((note) => (
          <NoteItem note={note} key={note._id} updateNote={updateNote} />
        ))
      ) : (
        <p>No notes to display</p>
      )} */}
    </>
  );
};

export default GetNotes;
