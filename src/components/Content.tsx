import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Pages } from "./NavBar";
import OurStory from "./OurStory";
import Details from "./Details";

function Content() {
    return (
        <div className="content">
            <Container>
                <Row className="centered">
                    <h3>
                        Please join Greg and Jenny on October 8-9, 2022 as we celebrate our wedding in Scotland
                    </h3>
                </Row>
                <Row className="centered">
                    <p>CAMBO ESTATE</p>
                </Row>
                <Row className="centered">
                    <p>Kingsbarns, St Andrews, Fife KY16 8QD</p>
                </Row>
            </Container>
            <div className="centered rsvp-section">
                <Row className="centered">
                    <h5>
                        We're so excited to celebrate with you!
                    </h5>
                </Row>
                <Row className="centered">
                    <Link className="rsvp" to={Pages.Rsvp}>RSVP</Link>
                </Row>
            </div>
            <OurStory />
            <Details />
        </div>
    );
}

export default Content;
