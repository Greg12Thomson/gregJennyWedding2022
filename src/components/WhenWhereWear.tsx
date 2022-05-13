import React from 'react';
import {Col, Container, Row, Image} from "react-bootstrap";
import LeftImage from "../images/File_005.png";

function WhenWhereWear() {
    return (
        <div className="when-where-wear" id="when-where-wear">
            <Container>
                <h1 className="page-header">
                    When Where Wear
                </h1>
                <Row>
                    <Col className="her-side" xs={12} md={6}>
                        <Image src={LeftImage} thumbnail/>
                    </Col>
                    <Col className="when-where-wear-details" xs={12} md={6} >
                        <div>
                            <h3>Saturday October 8, 2022</h3>
                            <p>Ceremony 1:30 - 2:15</p>
                            <p>Reception 19:00 - ~11:30</p>
                        </div>
                        <div>
                            <h3>Cambo Estate</h3>
                            <p>Kingsbarns, St Andrews, Fife, KY16 8QD</p>
                        </div>
                        <div>
                            <h3>Attire</h3>
                            <p>Dress: Formal</p>
                            <p>Encouraged: Scottish/Tartan</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default WhenWhereWear;
