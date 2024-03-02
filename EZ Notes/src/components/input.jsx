import { Add } from "@material-ui/icons";
import React, { useState } from "react";

function Input(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setNote(function (prev) {
      if (name === "title") {
        return {
          title: value,
          content: prev.content,
        };
      } else if (name === "content") {
        return {
          title: prev.title,
          content: value,
        };
      }
    });
  }

  function handleClick(event) {
    event.preventDefault();
    props.add(note);
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Title"
          onChange={handleChange}
          name="title"
          value={note.title}
        />
        <textarea
          placeholder="Add a note..."
          onChange={handleChange}
          name="content"
          value={note.content}
        ></textarea>
        <button onClick={handleClick}><Add/></button>
      </form>
    </div>
  );
}
export default Input;
