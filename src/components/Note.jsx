import { Card, Col, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import EditNoteForm from "./EditNoteForm";
import '../App.css'
import { RiFileEditFill, RiDeleteBin2Fill } from "react-icons/ri"
export default function Note(props) {
  const handleDelete = (e) => {
    e.preventDefault();
    props.removeNote(props.noteInfo.id);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose} className="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <EditNoteForm
            noteInfo={props.noteInfo}
            editNote={props.editNote}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>
      <Col md="12"style={{ marginBottom: "2rem"}}>
        <Card  className="h-100">
          <Card.Body className="pt-4">
            <Card.Subtitle className="mb-4 text-muted" style={{borderBottom: "0.2px solid black", width: "fit-content"}}>
            {props.noteInfo.title}
            </Card.Subtitle>
            <Card.Text>Date: {props.noteInfo.date}</Card.Text>
            <Card.Text>Note : {props.noteInfo.text}</Card.Text>
            <div className="d-flex flex-row justify-content-end" >
              <Button variant="light" onClick={handleShow} className="me-3 btn-lg">
               <RiFileEditFill/>
              </Button>
              <Button variant="light" onClick={handleDelete} className=" btn-lg">
                <RiDeleteBin2Fill/>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
