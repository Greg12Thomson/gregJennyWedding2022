import React, {useState, useEffect} from 'react';
import Header from './Header';
import Content from './Content';
import {Navbar, Nav} from 'react-bootstrap';
import Logo from "../images/JennyAndGregLogoWhite.png";

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
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="35"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Jenny+Greg</Nav.Link>
              <Nav.Link href="#details">Running Order</Nav.Link>
              <Nav.Link href="#when-where-wear">When+Where+Wear</Nav.Link>
              <Nav.Link href="#travel-guide">Travel Guide</Nav.Link>
              <Nav.Link href="#gifts">Gifts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      <Header />
      <Content />
    </>
  );
}

export default Home;
