import React from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';


function NavBar() {
  return (
    <div className="home-navbar">
      <Navbar fixed="top" bg="dark" expand="lg">
        <Navbar.Brand href="#home">Jenny & Greg</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#wedding">Wedding</Nav.Link>
            <Nav.Link href="#location">Location</Nav.Link>
            <Nav.Link href="#gifts">Gifts</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button className="rsvp" href="#rsvp">RSVP</Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
