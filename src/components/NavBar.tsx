import React from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';


function NavBar() {
  return (
    <div className="home-navbar">
      <Navbar fixed="top" bg="dark">
      <Navbar.Brand href="#home">Jenny & Greg</Navbar.Brand>
        <Navbar.Toggle />
        <Nav className="mr-auto">
          <Nav.Link href="#home">Wedding</Nav.Link>
          <Nav.Link href="#features">Location</Nav.Link>
          <Nav.Link href="#pricing">Gifts</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button className="rsvp" href="#login">RSVP</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
