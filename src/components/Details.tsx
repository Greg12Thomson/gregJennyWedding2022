import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

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
                            <p>
                                Ceremony - 1pm
                            </p>
                        </Row>
                        <Row>
                            <p>
                            </p>
                        </Row>
                        <Row>
                            <p>
                                Dinner - 5pm
                            </p>
                        </Row>
                        <Row>
                            <p>
                            </p>
                        </Row>
                        <Row>
                            <p>
                                Band starts - 8pm
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
                                1.45pm - After ceremony
                            </p>
                        </Row>
                        <Row>
                            <p>
                            </p>
                        </Row>
                        <Row>
                            <p>
                                7pm - Reception
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Details;
