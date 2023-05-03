import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Button} from "react-bootstrap";
import AddNoteForm from "./components/AddNoteForm.jsx";
import Notes from "./components/Notes.jsx";
import { addNote, removeNote, editNote } from "./actions/noteActions.jsx";
import { GrAdd, GrClose } from "react-icons/gr";
import { useState } from "react";

export function App() {
 
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const addNewNOte = (note) => {
    dispatch(addNote(note));
  };
  const removeNOte = (id) => {
    dispatch(removeNote(id));
  };
  const editNOte = (id, updatedNote) => {
    dispatch(editNote(id, updatedNote));
  };
  
  const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Container style={{ marginTop: "2rem" }}>

        <Col md="12" className="mb-2 d-flex flex-row px-5 py-2 " style={{border: "1px solid lightgrey", borderRadius:"5px"}}>
          <h4>Notes</h4>
          <div className="d-flex flex-row ms-auto">
          <Button variant="light" onClick={handleShow} className="me-3">
            <GrAdd/>
          </Button> 
          {show && <Button variant="light" onClick={handleClose}>
            <GrClose/>
          </Button>}
          </div> 
        </Col>
        <Col md="12" className="mb-2">
         { show && <AddNoteForm setShow={setShow} addNote={addNewNOte} />}
        </Col>
        <Col md="12">
          <Notes noteData={notes} removeNote={removeNOte} editNote={editNOte} />
        </Col>
      </Container>
    </div>
  );
}

export default App;
