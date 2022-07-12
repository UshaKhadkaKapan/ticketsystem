import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const Login = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log(form);
    // need to meet the api end point
  };

  return (
    <Container className="reg-form">
      <Row>
        <Col>
          <Form className="ml-5" onSubmit={handleOnSubmit}>
            <h1 className=" text-center text-info ">Client Login </h1>
            <hr />
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                name="email"
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                name="password"
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Button type="submit" variant="info">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="">Forget Password ?</a>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
