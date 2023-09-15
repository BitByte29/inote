// import { useEffect, useState } from "react";
import AddNote from "./AddNote";
import GetNotes from "./GetNotes";
// import { useNavigate } from "react-router-dom";

function Notes() {
  // const [check, setCheck] = useState(false);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   setCheck(localStorage.getItem("token") === null);
  //   if (check) {
  //     navigate("/login");
  //   }
  //   // eslint-disable-next-line
  // }, []);

  return (
    <>
      <AddNote />
      <GetNotes />
    </>
  );
}

export default Notes;
