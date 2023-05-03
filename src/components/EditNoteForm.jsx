import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { AiOutlineCheck } from "react-icons/ai";

export default class EditNoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.noteInfo.title,
      date: props.noteInfo.date,
      text: props.noteInfo.text,
      id: props.noteInfo.id,
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editNote(this.state.id, this.state);
    this.props.closeModal();
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Title"
              value={this.state.title}
              name="title"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter date"
              value={this.state.date}
              name="date"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Text</Form.Label>
            <textarea
              type="text"
              placeholder="Enter Text"
              value={this.state.text}
              name="text"
              onChange={this.handleChange}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="6"
            ></textarea>
            <Form.Text className="text-muted">All notes go in here</Form.Text>
          </Form.Group>
          <Button variant="light" type="submit">
            <AiOutlineCheck />
          </Button>
        </Form>
      </div>
    );
  }
}
