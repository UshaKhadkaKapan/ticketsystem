import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const SearchForm = ({ handleOnChange, str }) => {
  console.log(str);
  return (
    <div>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
          <Form.Label column m="2">
            Search
          </Form.Label>
          <Col ms="10">
            <Form.Control
              type="email"
              value={str}
              onChange={handleOnChange}
              name="search"
              placeholder="Enter email"
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchForm;
