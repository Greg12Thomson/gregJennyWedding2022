import React from 'react';
import { Container, Row} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Pages } from "./NavBar";

function Content() {
  return (
    <div className="content">
      <Container>
        <Row className="centered">
          <h3>
           Please join Greg and Jenny from October 8-9, 2022 as we celebrate our wedding in Scotland.
          </h3>

          <p>CAMBO ESTATE</p>
        </Row>
        <Row className="centered">
          <Link className="button" to={Pages.Rsvp}>RSVP</Link>
        </Row>
      </Container>
    </div>
  );
}

export default Content;
