import React from 'react';
import {Col, Container, Row, Image} from "react-bootstrap";
import Knot from "../images/Knot.png";
import Glasses from "../images/Glasses.png";
import Cambo from "../images/Cambo.png";
import Cutlery from "../images/Cutlery.png";
import Disco from "../images/Disco.png";

function Details() {
    return (
        <div className="details" id="details">
            <Container>
                <h1 className="page-header">
                    Wedding Details
                </h1>
                <Row>
                    <Col className="when" xs={6} md={6}>
                        <Row>
                            <Image src={Cambo} />
                            <p>
                                Arrival - 12:30
                            </p>
                        </Row>
                        <Row>
                            <Image src={Glasses} />
                            <p>
                                Drinks - 14:00
                            </p>
                        </Row>
                        <Row>
                            <Image src={Disco} />
                            <p>
                                Party - 19:30
                            </p>
                        </Row>
                    </Col>
                    <Col className="where" xs={6} md={6} >
                        <Row>
                            <p>
                            </p>
                        </Row>
                        <Row>
                            <p className="first">
                                13:00 - Ceremony
                            </p>
                            <Image src={Knot} />
                        </Row>
                        <Row>
                            <p>
                                16:30 - Dinner
                            </p>
                            <Image src={Cutlery} />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Details;
