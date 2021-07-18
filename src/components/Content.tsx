import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Pages } from "./NavBar";
import OurStory from "./OurStory";
import Details from "./Details";
import GettingThere from "./GettingThere";

function Content() {
    return (
        <div className="content">
            <div className="centered rsvp-section">
                <Row className="centered">
                    <h4>
                        Please join Greg and Jenny on October 8th - 9th, 2022 as we celebrate our wedding in Scotland
                    </h4>
                </Row>
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
            <GettingThere />
        </div>
    );
}

export default Content;
