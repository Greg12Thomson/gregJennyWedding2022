import React from 'react';

import {Col, Container, Row, Image} from "react-bootstrap";
import InstaxOne from '../images/File_000.png';
import InstaxTwo from '../images/File_001.png';
import InstaxThree from '../images/File_002.png';

export function VipHeader() {
  return (
    <header className="Vip-header">
      <div className="heading">
        <h2>
          VIP
        </h2>
        <p>
          You are a very important person to us
        </p>
      </div>
    </header>
  );
}

export function VipContent() {
  return (
      <div className="Vip-Content">
        <Container>
            <h1>
                Weekend Wedding Details
            </h1>
            <hr/>
            <Row>
                <Col xs={12} md={6} className="text-1">
                    <Row className="centered">
                        <p>
                          Thank you so much for saving the whole weekend to help
                          us celebrate our wedding. Firstly, let us give you a
                          little information about the room and paying. We have
                          super limited space so when we say VIP, we mean it!
                          <br/><br/>
                          The £450 we are asking for each room covers you from
                          the Friday to the Monday, however you can come and go
                          as you please. The room will be yours the whole time
                          no matter how long you stay (although we recommend
                          staying the whole time because...duh?)
                        </p>
                    </Row>
                </Col>
                <Col xs={12} md={6} className="image-1">
                    <Row className="centered">
                        <Image src={InstaxOne} thumbnail/>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6} className="image-2">
                    <Row className="centered">
                        <Image src={InstaxTwo} thumbnail/>
                    </Row>
                </Col>
                <Col xs={12} md={6} className="text-2">
                    <Row className="centered">
                        <p>
                          To book your room, please contact either Jenny or Greg
                          before the end of March 2021. And to pay please call
                          up Cambo House Estate, 07552436888 to speak to Kay,
                          and say it is for the Cleeton/Thomson wedding
                          weekend, the wedding being the 8th of October 2022.
                          Disclaimer, all rooms{" "}
                          <strong>have to be paid</strong> by February 2022,
                          so we have given you a year to save. If you want
                          though, you can phone right now and book your room.
                          <br/><br/>

                          If you cannot or do not want to take your room, please
                          let us know ASAP so we can offer it to somebody else
                          and give them time to save if they need to. Just drop
                          us a text or give us a call, our numbers are below.
                        </p>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6} className="text-3">
                    <Row className="centered">
                        <p>
                            We really hope you can all join us for a weekend of fun.
                            Our current plan is to have a Friday potluck, Saturday
                            get married (eek!) and on Sunday a BYOB, hungover but
                            lovely, BBQ. Probably with a few leftovers from the
                            Friday and the Saturday too.<br/><br/>

                            You probably all do have at least one of our numbers
                            but just in case you can get us on:<br/><br/>

                            Greg - 07710270944<br/>
                            Jenny - 07952376389
                        </p>
                    </Row>
                </Col>
                <Col xs={12} md={6} className="image-3">
                    <Row className="centered">
                        <Image src={InstaxThree} thumbnail/>
                    </Row>
                </Col>
            </Row>
        </Container>
      </div>
  );
}
