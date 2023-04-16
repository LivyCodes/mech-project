import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

function LeftNavBar() {
  return (
    <div className="left-nav">
      <Navbar bg="light" expand="sm">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" className="custom-nav-link">
                HOME
              </Nav.Link>
              <Nav.Link href="#link" className="custom-nav-link">
                A/C SERVICES
              </Nav.Link>
              <Nav.Link href="#link" className="custom-nav-link">
                AUTO MAINTENANCE
              </Nav.Link>
              <Nav.Link href="#link" className="custom-nav-link">
                BRAKES
              </Nav.Link>
              <Nav.Link href="#link" className="custom-nav-link">
                TRANSMISSIONS
              </Nav.Link>
              <Nav.Link href="#link" className="custom-nav-link">
                FLOAT SERVICES
              </Nav.Link>
              <Nav.Link href="#link" className="custom-nav-link">
                EXHAUST & MUFFLERS
              </Nav.Link>
              <Nav.Link href="#link" className="custom-nav-link">
                OIL CHANGES
              </Nav.Link>
              <Nav.Link href="#link" className="custom-nav-link">
                STRUTS
              </Nav.Link>
              <Nav.Link href="#link" className="custom-nav-link">
                ABOUT US
              </Nav.Link>
              <Nav.Link href="#link" className="custom-nav-link">
                CONTACT US
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default LeftNavBar;
