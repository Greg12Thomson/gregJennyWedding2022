import React from 'react';
import {Col, Container, Row, Image} from "react-bootstrap";
import VanImage from "../images/van.jpg";

function Gifts() {
    return (
        <div className="gifts-page" id="gifts">
            <Container>
                <h1 className="page-header">
                    Gifts
                </h1>
                <Row>
                    <Col className="her-side" xs={12} md={4}>
                        <Image src={VanImage} thumbnail/>
                    </Col>
                    <Col className="gifts" xs={12} md={8} >
                        <p>
                            We have been together for a long time so don’t need anything for our home, we really just  appreciate you making the journey and time to celebrate our wedding day with us. <br/>
                            Therefore we do not want to ask for any gifts, but if you really want to, a little bit of money towards our 2023 adventure is all we really need.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Gifts;
