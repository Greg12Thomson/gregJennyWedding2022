import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import HerImage from "../images/File_003.png";

// TODO: fix styling 
function OurStory() {
    return (
        <div className="our-story" id="our-story">
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
                    </Col>
                    <Col className="his-side" xs={12} md={6}>
                        <p>
                            Greg and Jenny met when they were in third year at high school, but it wasn’t
                            until after a summer of secret walks, side glances at parties and two years that
                            Greg plucked up the courage to ask her out across MSN. <br/><br/>
                            They have travelled all over the world, both together and independently, and have
                            amassed a total of 37 living and thriving house plants. <br/><br/>
                            On the day you join them to celebrate their marriage at Cambo Estate, they will
                            have been together for a total of 12 years. <br/><br/>
                            They cannot wait to share their day of love, food, dancing and drinks with you.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default OurStory;
