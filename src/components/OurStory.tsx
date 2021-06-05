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
                            I moved to Perth High School when I was 14 years old with romanticised ideas of getting the
                            school bus, soon to realise it wasn’t that glamorous and I spent more time than I thought
                            chasing the damn thing along the road. Then I saw a boy who got on the other bus and next
                            thing you know we are getting married. I say next thing, I mean 14 years after meeting and
                            12 years after dating. So I guess the village buses do hold a bit of a romanticism.
                        </p>
                    </Col>
                    <Col className="his-side" xs={12} md={6}>
                        <Image src={HimImage} thumbnail/>
                        <FontAwesomeIcon icon={faComments} size="2x"/>
                        <h4>
                            His Side
                        </h4>
                        <p>
                            TODO
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default OurStory;
