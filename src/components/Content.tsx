import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';

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
          <Button className="rsvp" href="#rsvp">RSVP</Button>
        </Row>
      </Container>
    </div>
  );
}

export default Content;
