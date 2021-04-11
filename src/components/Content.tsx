import React from 'react';
import {Container, Row} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {Pages} from "./NavBar";

function Content() {
    return (
        <div className="content">
            <Container>
                <Row className="centered">
                    <h3>
                        Please join Greg and Jenny from October 8-9, 2022 as we celebrate our wedding in Scotland.
                    </h3>

                    <p>CAMBO ESTATE</p>
                </Row>
                <Row className="centered">
                </Row>
            </Container>
            <div className="centered rsvp-section">
                <Row className="centered">
                    <h5>
                        We're so excited to celebrate with you
                    </h5>
                </Row>
                <Row className="centered">
                    <Link className="rsvp" to={Pages.Rsvp}>RSVP</Link>
                </Row>
            </div>
        </div>
    );
}

export default Content;
