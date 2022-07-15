import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddNewTicketForm from "../../components/addTicketFrm/AddNewTicketForm";
import BreadCrum from "../../components/breadCrum/BreadCrum";

const AddNewTicket = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrum pages="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddNewTicketForm />
        </Col>
      </Row>
    </Container>
  );
};

export default AddNewTicket;
