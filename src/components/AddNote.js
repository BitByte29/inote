import React, { useContext, useState } from "react";
import noteContext from "./../context/notes/NoteContext";
import "./../styles/form.css";

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
      <h3>Add your notes.</h3>
      <div className="formdiv" style={{ boxShadow: "none" }}>
        <form>
          <div className="form-element">
            <label htmlFor="title">Add a Title</label>
            <input
              onChange={onChange}
              type="text"
              className=""
              id="title"
              name="title"
              placeholder="Enter Title"
              minLength={5}
              required
              value={note.title}
            />
          </div>
          <div className="form-element">
            <label htmlFor="description">Add description</label>
            <input
              onChange={onChange}
              type="text"
              className=" "
              id="description"
              name="description"
              placeholder="Enter description"
              value={note.description}
              minLength={5}
              required
            />
          </div>
          <div className="form-element">
            <label htmlFor="tag">Add a Tag</label>
            <input
              onChange={onChange}
              type="text"
              className=""
              id="tag"
              name="tag"
              value={note.tag}
              placeholder="Enter Tag"

              // value={"general"}
            />
          </div>
          <div className="form-element">
            <button
              type="submit"
              className="btn btn-success"
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <p>{errors}</p>
    </div>
  );
};

export default AddNote;
