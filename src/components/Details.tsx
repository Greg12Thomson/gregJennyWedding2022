import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Pages} from "./NavBar";

function Details() {
    return (
        <div className="details">
            <Container>
                <h1 className="page-header">
                    Wedding Details
                </h1>
                <Row>
                    <Col className="when" xs={12} md={6}>
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
                    </Col>
                    <Col className="where" xs={12} md={6} >
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
                </Row>
                <Row className="centered register">
                    <Link className="rsvp" to={Pages.Rsvp}>RSVP</Link>
                </Row>
                <Row className="centered">
                    <p>
                        Map!
                    </p>
                </Row>
            </Container>
        </div>
    );
}

export default Details;
