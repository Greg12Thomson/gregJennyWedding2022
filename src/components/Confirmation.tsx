import React from 'react';
import { Col, Container, Image } from "react-bootstrap";
import { Pages } from "./NavBar";
import InstaxOne from '../images/File_002.png';

interface ConfirmationProps {
    attending?: boolean | undefined;
}

function Confirmation({ attending }: ConfirmationProps) {
    return (
        <>
            <div className="app-header-confirm">
                <div className="heading">
                    <h2 className="title">
                        Thank you!
                    </h2>
                </div>
            </div>
            <div className="rsvp-page">
                <Container>
                    {attending ? (
                        <p className="confirm">
                            We look forward to celebrating with you! You can find a lot more about the wedding, where to stay and how to get there <a href={Pages.Home}>here</a>.
                        </p>
                    ) : (
                        <p className="confirm" >
                            We’re sorry you won’t be able to celebrate with us.
                        </p>
                    )}
                    <Col xs={12} md={12} className="confirm-image">
                        <Image src={InstaxOne} thumbnail />
                    </Col>
                </Container>
            </div>
        </>
    );
}

export default Confirmation;
