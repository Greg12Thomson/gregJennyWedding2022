import React from 'react';
import { Container, Row } from 'react-bootstrap';

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row className="centered">
          <p>
            Contact us at gregwedsjenny@gmail.com<br/>
            © 2022 By Jenny & Greg. Created by Greg (it is my job after all)
          </p>
        </Row>
      </Container>
    </div>

  );
}

export default Footer;
