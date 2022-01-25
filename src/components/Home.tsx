import React, {useState, useEffect} from 'react';
import Header from './Header';
import Content from './Content';
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
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(currentScrollPos < prevScrollPos)
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <>
      <Navbar
            className={visible ? "" : "hidden"}
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
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#our-story">Our Story</Nav.Link>
              <Nav.Link href="#details">Details</Nav.Link>
              <Nav.Link href="#travel-guide">Travel Guide</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      <Header />
      <Content />
    </>
  );
}

export default Home;
