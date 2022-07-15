import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const AddNewTicketForm = ({ handleOnChange, handleOnSubmit }) => {
  return (
    <div className="reg-form mb-3 mt-3">
      <Form className="ml-5" onSubmit={handleOnSubmit}>
        <h1 className=" text-center text-info "> Add New Ticket </h1>
        <hr />
        <Form.Group sm={9} className="mb-3" controlId="formGroupEmail">
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              onChange={handleOnChange}
              name="subject"
              type="text"
              placeholder="Subject"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group sm={9} className="mb-3" controlId="formGroupEmail">
          <Form.Label column sm={3}>
            Issued Date
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              onChange={handleOnChange}
              name="issueDate"
              type="date"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formGroupPassword">
          <Form.Label column sm={3}>
            Details
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              onChange={handleOnChange}
              name="details"
              as="textarea"
              row="5"
              required
            />
          </Col>
        </Form.Group>
        <Button type="submit" variant="info">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddNewTicketForm;
