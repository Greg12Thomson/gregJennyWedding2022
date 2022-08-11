import React from 'react';
import {Col, Container, Row, Image} from "react-bootstrap";
import RunningOrder from "../images/Running-order-1.png";

function Details() {
    return (
        <div className="details" id="details">
            <Container>
                <h1 className="page-header">
                    Wedding Details
                </h1>
                <Row>
                    <Col className="running-order" md={2}>
                    </Col>
                    <Col className="running-order" md={8}>
                        <Image src={RunningOrder} />
                    </Col>
                    <Col className="running-order" md={2}>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Details;
