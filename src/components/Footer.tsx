import React from 'react';
import { Container, Row } from 'react-bootstrap';

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row className="centered">
          {/*TODO: create hashtag*/}
          <h5>
            #GregAndJennyWed
          </h5>
        </Row>
        <Row className="centered">
          <p>
            Contact us at gregandjennywed@googlemail.com
          </p>
        </Row>
        <Row className="centered">
          <p>
            © 2022 By Jenny & Greg. Created by Greg (it is my job after all)
          </p>
        </Row>
      </Container>
    </div>

  );
}

export default Footer;
