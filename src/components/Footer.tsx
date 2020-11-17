import React from 'react';
import { Container, Row } from 'react-bootstrap';

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row className="centered">
          <p>
            Save the Date! October 8, 2022
          </p>
        </Row>
        <Row className="centered">
          <p>
            Contact us at gregandjennywed@googlemail.com
          </p>
        </Row>
      </Container>
    </div>

  );
}

export default Footer;
