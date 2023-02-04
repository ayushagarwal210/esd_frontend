import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar_component() {
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <div className="col" align="left">
            <Navbar.Brand href="/">IIITB ERP</Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <div className="col" align="right">
              <img src={require("../IIITB Silver Jubilee Logo.png")} height="70px"/>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
export default Navbar_component;