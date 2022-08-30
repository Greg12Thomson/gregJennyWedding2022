import React from 'react';
import { Col, Container, Image } from "react-bootstrap";
import InstaxOne from '../images/File_002.png';

function Vip() {
    return (
        <>
            <div className="app-header-confirm">
                <div className="heading">
                    <h2 className="title">
                      VIP
                    </h2>
                    <p>
                      You are a very important person to us
                    </p>
                </div>
            </div>
            <div className="rsvp-page">
                <Container>
                    <Col xs={12} md={12} className="vip-content">
                        Thank you so much for saving the whole weekend to help us celebrate our wedding. Firstly, let us give you a little information about the room and paying. We have super limited space so when we say VIP, we mean it! <br/><br/>

                        The price of accommodation covers you from the Friday to the Monday, however you can come and go as you please. The room will be yours the whole time no matter how long you stay (although we recommend staying the whole time because...duh?). Check in 4pm Friday and checkout 10am Monday. <br/><br/>

                        We also want you to enjoy this escape to our favourite place in Scotland, so don’t feel like you need to spend Friday or Sunday with us, although your presence is requested on the Saturday. <br/><br/>

                        All rooms will either be en-suites, a cottage or part of a wing (posh, I know!). You will have access to communal living spaces and kitchens, think of it as a massive house. So feel free to bring any food and drink with you for the weekend, there are plenty of fridges and freezers. <br/><br/>

                        <strong>Potluck Friday:</strong><br/><br/>

                        Rooms wll be available from 4pm but feel free to arrive earlier to help setup if you want - let us know if you plan to, to make sure someone is there to let you in. After setting up and everyone has arrived, we are going to do a potluck. So please do bring a dish with you, there is plenty of fridges and Cambo will keep all food in fridges until we are ready.<br/><br/>

                        <strong>Saturday get married (eek!):</strong><br/><br/>

                        You’ll be told more about what to do on the day, but be ready for 12:30 to be seated for the ceremony! You’ll be herded around for the rest of the day. There will be an open bar with the usual things there, so if there is something specific you want to have or share with others, please feel free to bring it along and we can put it behind the bar. <br/><br/>


                        <strong>Sunday BYOB & Loony duke:</strong><br/><br/>

                        Hungover but lovely day! Loony duke for anyone brave enough, so please bring a swimming suit, a wet suit is fine but that’s not very loony! Then a BBQ/leftover feast with board games and general shenanigans.<br/><br/>

                        You probably all do have at least one of our numbers but just in case you can get us on:<br/><br/>

                        Greg - 07710270944<br/>
                        Jenny - 07952376389
                    </Col>

                    <Col xs={12} md={12} className="confirm-image">
                        <Image src={InstaxOne} thumbnail />
                    </Col>
                </Container>
            </div>
        </>
    );
}

export default Vip;
