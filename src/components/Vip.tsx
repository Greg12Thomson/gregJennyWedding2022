import React from 'react';

import {Col, Container, Row, Image} from "react-bootstrap";
import BackgroundImage from '../images/bw_smile.jpg';
import BwLaughImage from '../images/bw_laugh.jpg';
import BwImage from '../images/bw.jpg';


const style = {
  backgroundImage: `url(${BackgroundImage})`
}

export function VipHeader() {
  return (
    <header className="Vip-header" style={ style }>
      <div className="heading">
        <h2>
          VIP
        </h2>
        <p>
          You are a very important person
        </p>
      </div>
    </header>
  );
}

export function VipContent() {
  return (
      <div className="Vip-Content">
        <Container>
            <h1>
                Wedding details
            </h1>
            <hr/>
            <Row>
                <Col xs={12} md={6}>
                    <Row className="centered">
                        <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus..
                        </p>
                    </Row>
                </Col>
                <Col xs={12} md={6}>
                    <Row className="centered">
                        <Image src={BwLaughImage} thumbnail/>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <Row className="centered">
                        <Image src={BwImage} thumbnail/>
                    </Row>
                </Col>
                <Col xs={12} md={6}>
                    <Row className="centered">
                        <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus..
                        </p>
                    </Row>
                </Col>
            </Row>
        </Container>
      </div>
  );
}
