import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import TicketTable from "../../components/ticket-table/TicketTable";
import ticket from "../../assets/data/dummydata.json";
import BreadCrum from "../../components/breadCrum/BreadCrum";

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrum pages="DashBoard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-4 md-2">
          <Button
            variant="info"
            style={{ fontSize: "2rem", padding: "10px 30px" }}
          >
            Add new Button
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center md-2">
          <div>Total Ticket:500</div>
          <div>Pending Ticket:100</div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-2">Recently Added Tickets</Col>
      </Row>
      <hr />
      <Row>
        <Col className="Recent Ticket">
          <TicketTable ticket={ticket} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
