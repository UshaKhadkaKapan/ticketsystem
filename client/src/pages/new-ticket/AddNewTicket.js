import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddNewTicketForm from "../../components/addTicketFrm/AddNewTicketForm";
import BreadCrum from "../../components/breadCrum/BreadCrum";

const AddNewTicket = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    // need to meet the api end point
  };
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrum pages="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddNewTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AddNewTicket;
