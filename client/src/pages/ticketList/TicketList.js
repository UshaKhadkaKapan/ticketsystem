import React, { useEffect, useState } from "react";
import { Container, Row, Col, Breadcrumb, Button } from "react-bootstrap";
import BreadCrum from "../../components/breadCrum/BreadCrum";
import SearchForm from "../../components/searchForm/SearchForm";
import TicketTable from "../../components/ticket-table/TicketTable";
import Ticket from "../../assets/data/dummydata.json";

const TicketList = () => {
  const [str, setStr] = useState("");

  useEffect(() => {}, [str]);

  const handleOnChange = (e) => {
    setStr(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrum pages="Ticket List" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="info">Add New Ticket</Button>
        </Col>
        <Col className="text-right">
          <SearchForm
            handleOnChange={handleOnChange}
            str={str}
            Ticket={Ticket}
          />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketList;
