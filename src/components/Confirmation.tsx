import React from 'react';
import {Col, Container, Image} from "react-bootstrap";
import {Pages} from "./NavBar";
import InstaxOne from '../images/File_002.png';


function Confirmation() {
    return (
    <>
        <div className="app-header-confirm">
            <div className="heading">
                <h2 className="title">
                Thanks for RSVPing
                </h2>
            </div>
        </div>
        <div className="rsvp-page">
            <Container>
                <p className="confirm">
                    For more information about the wedding, visit <a href={Pages.Home}>our website</a>.
                </p>
                <Col xs={12} md={12} className="centered">
                    <Image src={InstaxOne} thumbnail/>
                </Col>
            </Container>
        </div>
    </>
    );
}

export default Confirmation;
