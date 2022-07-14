import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../src/assets/logo.PNG";

const Header = () => {
  return (
    <div>
      <Navbar bg="info" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" width="100px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/ticket">Ticket</Nav.Link>
              <Nav.Link href="/logout">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
