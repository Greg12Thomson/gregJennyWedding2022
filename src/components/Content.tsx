import React from 'react';
import { Button, Container, Col, Row, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-regular-svg-icons'
import FireImage from '../images/fire.jpeg';

function Content() {
  return (
    <div className="content">
      <Container>
        <Row className="centered">
          <h3>
           Please join Greg and Jenny from Octomer 8-9, 2022 as we celebrate our wedding in Scotland.
          </h3>

          <p>CAMBO ESTATE</p>
        </Row>
        <Row className="ourStory">
          <Col xs={6} md={6}>
            <Image src={FireImage} thumbnail />
            <FontAwesomeIcon icon={faComments} size="2x"/>
            <h5>
              Her Side
            </h5>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
              ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
              tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
              Donec lacinia congue felis in faucibus..
            </p>
          </Col>
          <Col xs={6} md={6}>
            <Image src={FireImage} thumbnail />
            <FontAwesomeIcon icon={faComments} size="2x"/>
            <h5>
              His Side
            </h5>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
              ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
              tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
              Donec lacinia congue felis in faucibus.
            </p>
          </Col>
        </Row>
        <Row className="centered">
          <Button className="rsvp" href="#rsvp">RSVP</Button>
        </Row>
      </Container>
    </div>
  );
}

export default Content;
