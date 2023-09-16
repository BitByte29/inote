import AddNote from "./AddNote";
import GetNotes from "./GetNotes";
import "./../styles/Notes.css"; // Import a CSS file for styling

function Notes() {
  return (
    <>
      <div className="notes-container">
        <div className="addNotes">
          <AddNote />
        </div>
        <div className="getNotes">
          <GetNotes />
        </div>
      </div>
    </>
  );
}

export default Notes;
