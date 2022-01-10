import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function Details() {
    return (
        <div className="details">
            <Container>
                <h1 className="page-header">
                    Wedding Details
                </h1>
                <Row>
                    <Col className="when" xs={6} md={6}>
                        <Row className="centered">
                            <h5>
                                When?
                            </h5>
                        </Row>
                        <Row className="centered">
                            <p>
                                Saturday 8th October, 2022, 2PM
                            </p>
                        </Row>
                    </Col>
                    <Col className="where" xs={6} md={6} >
                        <Row className="centered">
                            <h5>
                                Where?
                            </h5>
                        </Row>
                        <Row className="centered">
                            <p>
                                Cambo Estate, Kingsbarns, St Andrews, Fife, KY16 8QD
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Details;
