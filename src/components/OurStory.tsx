import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import HimImage from "../images/G.png";
import HerImage from "../images/J.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments} from "@fortawesome/free-regular-svg-icons";

function OurStory() {
    return (
        <div className="our-story">
            <Container>
                <h1 className="page-header">
                    Our Story
                </h1>
                <Row className="ourStory">
                    <Col xs={6} md={6}>
                        <Image src={HerImage} thumbnail/>
                        <FontAwesomeIcon icon={faComments} size="2x"/>
                        <h5>
                            Her Side
                        </h5>
                        <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                            Donec lacinia congue felis in faucibus..
                        </p>
                    </Col>
                    <Col xs={6} md={6}>
                        <Image src={HimImage} thumbnail/>
                        <FontAwesomeIcon icon={faComments} size="2x"/>
                        <h5>
                            His Side
                        </h5>
                        <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                            Donec lacinia congue felis in faucibus.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default OurStory;
