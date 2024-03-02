import React from "react";

function Note(props) {
  function handleClick(event) {
    props.delete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.heading}</h1>
      <p>{props.body}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Note;
