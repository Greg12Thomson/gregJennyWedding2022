import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Button, Navbar, Nav } from 'react-bootstrap';

import Home from './Home';
import Details from './Details';
import OurStory from './OurStory';
import GettingThere from './GettingThere';
import Rsvp from './Rsvp';

enum Pages {
  Home = "/",
  Details = "/details",
  Story = "/story",
  GettingThere = "/getting-there",
  Rsvp = "/rsvp"
}

function NavBar() {
  return (
    <div className="home-navbar">
        <Navbar fixed="top" bg="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to={Pages.Home} >Home</Nav.Link>
              <Nav.Link as={Link} to={Pages.Details}>Details</Nav.Link>
              <Nav.Link as={Link} to={Pages.Story}>Our Story</Nav.Link>
              <Nav.Link as={Link} to={Pages.GettingThere}>Getting There</Nav.Link>
              <Nav.Link as={Link} to={Pages.Rsvp}>RSVP</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <Button className="rsvp" href="#rsvp">RSVP</Button>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Navbar>
        <div className="content-wrapper">
            <Switch>
                <Route exact path={Pages.Home} component={Home} />
                <Route exact path={Pages.Details} component={Details} />
                <Route exact path={Pages.Story} component={OurStory} />
                <Route exact path={Pages.GettingThere} component={GettingThere} />
                <Route exact path={Pages.Rsvp} component={Rsvp} />
                <Route render={function () {
                    return <p>404: Page Not found</p>
                }} />
            </Switch>
        </div>
    </div>
  );
}

export default NavBar;
