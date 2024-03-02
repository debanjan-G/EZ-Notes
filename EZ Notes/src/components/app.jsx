import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Input from "./input";
import Note from "./note";
// import notes from "../notes.js";

function App() {
  const [noteArray, setNoteArray] = useState([]);
  function addNote(note) {
    setNoteArray((prev) => {
      return [...prev, note];
    });
  }
  function deleteNote(index) {
    setNoteArray((prev) => {
      return prev.filter((elem, i) => {
        return i !== index;
      });
    });
  }
  return (
    <div>
      <Header />
      <Input add={addNote} />
      {noteArray.map((elem, index) => (
        <Note
          heading={elem.title}
          body={elem.content}
          delete={deleteNote}
          key={index}
          id={index}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
