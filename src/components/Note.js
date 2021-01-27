import React from "react";
import notes from "./notes";
import NoteBody from "./NoteBody";

function Note() {
  return (
    <div>
      {notes.map(note => {
        return (
          <NoteBody key={note.key} title={note.title} body={note.content} />
        );
      })}
    </div>
  );
}

export default Note;
