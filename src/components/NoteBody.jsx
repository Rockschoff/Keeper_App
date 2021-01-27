import React from "react";

function NoteBody(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  );
}

export default NoteBody;
