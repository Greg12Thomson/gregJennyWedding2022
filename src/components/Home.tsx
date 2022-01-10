import React from 'react';
import Header from './Header';
import Content from './Content';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavbarBrand} from 'react-bootstrap';

// TODO: move to own file
export enum Pages {
  Home = "/",
  Details = "/details",
  Story = "/story",
  GettingThere = "/getting-there",
  Rsvp = "/rsvp",
  Confirm = "/confirmation"
}

function Home() {
  return (
    <>
      <Navbar
            fixed="top"
            bg="dark"
            expand="sm"
            variant="dark"
            collapseOnSelect={true}
        >
          <NavbarBrand className="navbar-brand">Jennifer & Gregor</NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to={Pages.Home} >Home</Nav.Link>
              <Nav.Link as={Link} to={Pages.Details}>Details</Nav.Link>
              <Nav.Link as={Link} to={Pages.Story}>Our Story</Nav.Link>
              <Nav.Link as={Link} to={Pages.GettingThere}>Getting There</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      <Header />
      <Content />
    </>
  );
}

export default Home;
