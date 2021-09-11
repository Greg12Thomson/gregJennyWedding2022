import React from 'react';
import {Col, Container, Image} from "react-bootstrap";
import {Pages} from "./NavBar";
import InstaxOne from '../images/File_000.png';


function Confirmation() {
    return (
        <div className="rsvp-page">
            <Container>
                <h1>
                    Thanks for RSVPing
                </h1>
                <p className="confirm">
                    For more information about the wedding, visit <a href={Pages.Home}>our website</a>.
                </p>
                <Col xs={12} md={12} className="centered">
                    <Image src={InstaxOne} thumbnail/>
                </Col>
            </Container>
        </div>
    );
}

export default Confirmation;
