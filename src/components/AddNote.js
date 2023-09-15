import React, { useContext, useState } from "react";
import noteContext from "./../context/notes/NoteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote, errors } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>Add your notes.</h1>
      <div className="my-4">
        <form>
          <div className="form-group my-3">
            <label htmlFor="title">Add a Title</label>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Enter Title"
              minLength={5}
              required
              value={note.title}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="description">Add description</label>
            <input
              onChange={onChange}
              type="text"
              className="form-control "
              id="description"
              name="description"
              placeholder="Enter description"
              value={note.description}
              minLength={5}
              required
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="tag">Add a Tag</label>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              value={note.tag}
              placeholder="Enter Tag"

              // value={"general"}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary my-3"
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </div>
      <p>{errors}</p>
    </div>
  );
};

export default AddNote;
