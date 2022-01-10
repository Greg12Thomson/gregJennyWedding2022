import React from 'react';
import { Row } from 'react-bootstrap';
import OurStory from "./OurStory";
import Details from "./Details";
import GettingThere from "./GettingThere";

function Content() {
    return (
        <div className="content">
            <div className="centered rsvp-section">
                <Row className="centered">
                    <h4>
                        Please join Greg and Jenny at Cambo Estate for a big auld Scottish wedding.
                    </h4>
                </Row>
                <Row className="centered">
                    <h5>
                    </h5>
                </Row>
            </div>
            <OurStory />
            <Details />
            <GettingThere />
        </div>
    );
}

export default Content;
