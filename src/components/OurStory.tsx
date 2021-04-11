import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import HimImage from "../images/File_002.png";
import HerImage from "../images/File_003.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments} from "@fortawesome/free-regular-svg-icons";

function OurStory() {
    return (
        <div className="our-story">
            <Container>
                <h1 className="page-header">
                    Our Story
                </h1>
                <h4>
                    We Are Getting Married!
                </h4>
                <Row>
                    <Col className="her-side" xs={12} md={6}>
                        <Image src={HerImage} thumbnail/>
                        <FontAwesomeIcon icon={faComments} size="2x"/>
                        <h4>
                            Her Side
                        </h4>
                        <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                            Donec lacinia congue felis in faucibus..
                        </p>
                    </Col>
                    <Col className="his-side" xs={12} md={6}>
                        <Image src={HimImage} thumbnail/>
                        <FontAwesomeIcon icon={faComments} size="2x"/>
                        <h4>
                            His Side
                        </h4>
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
