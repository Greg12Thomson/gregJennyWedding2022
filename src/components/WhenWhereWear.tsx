import React from 'react';
import {Col, Container, Row, Image} from "react-bootstrap";
import LeftImage from "../images/File_005.png";

function WhenWhereWear() {
    return (
        <div className="when-where-wear" id="when-where-wear">
            <Container>
                <h1 className="page-header">
                    What When Where Wear
                </h1>
                <Row>
                    <Col className="ceilidh" xs={12} md={12}>
                            The Gaelic word <strong>cèilidh</strong> (pronounced kay-lee) is often associated with kilts, highland dancing and a full band of Scottish musicians. But, it's a word which simply means <strong>visiting and socialising</strong> with friends.<br /><br />
                            It's about celebrating the joys of <strong>community and connection</strong> to each other. An invite to 'come round for a wee cèilidh', requires <strong>no fuss or formality</strong>. Just bring yourself (and something to drink!).<br /><br />
                            There will be an open bar with the usual things there, so if there is something specific you want to have or share with others, please feel free to bring it along and we can put it behind the bar.
                    </Col>
                </Row>
                <Row>
                    <Col className="her-side" xs={12} md={6}>
                        <Image src={LeftImage} thumbnail/>
                    </Col>
                    <Col className="when-where-wear-details" xs={12} md={6} >
                        <div>
                            <h3>Saturday October 8, 2022</h3>
                            <p>Ceremony 1 - 1:45</p>
                            <p>Reception 19:00 - ~Midnight</p>
                        </div>
                        <div>
                            <h3>Cambo Estate</h3>
                            <p>Kingsbarns, St Andrews, Fife, KY16 8QD</p>
                        </div>
                        <div>
                            <h3>Attire</h3>
                            <p>Dress: Formal</p>
                            <p>Encouraged: Scottish/Tartan</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default WhenWhereWear;
