import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function Details() {
    return (
        <div className="details">
            <Container>
                <h1 className="page-header">
                    Wedding details
                </h1>
                <Row>
                    <Col xs={6} md={6}>
                        <Row className="centered">
                            <h5>
                                When
                            </h5>
                        </Row>
                        <Row className="centered">
                            <p>
                                October 8, 2022, 1:00 PM
                            </p>
                        </Row>
                        <Row className="centered">
                            <h5>
                                Where
                            </h5>
                        </Row>
                        <Row className="centered">
                            <p>
                                Cambo House, Kingsbarns, St Andrews KY16 8QD
                            </p>
                        </Row>
                    </Col>
                    <Col xs={6} md={6}>
                        <Row className="centered">
                            <p>
                                Map!
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Details;
