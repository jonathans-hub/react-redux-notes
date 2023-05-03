import React from "react";
import { Container } from "react-bootstrap";
import Note from "./Note";

export default function Notes(props) {
  return (
    <Container>
        {props.noteData.map((note) => {
          return (
            <Note
              noteInfo={note}
              key={note.id}
              removeNote={props.removeNote}
              editNote={props.editNote}
              />
          );
        })} 
    </Container>
  );
}

