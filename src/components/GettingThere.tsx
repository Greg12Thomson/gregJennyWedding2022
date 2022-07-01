import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import MapImage from "../images/map.png";


function GettingThere() {
  return (
    <div className="getting-there" id="travel-guide">
      <Container>
        <h1 className="page-header">
            Travel Guide
        </h1>
        <Row>
          <Col xs={12} md={12}>
            <h3>
              Getting There
            </h3>
            <p className="description">
              Thank you so much for making the journey to our wedding, we are so excited to get married and have
              our friends and family dance the night away with us. Now we know how to get there, because we’ve
              been going since we were 16 when we still had to ask our mums for a lift. <br/><br/>

              So let us help you out: <br/>
            </p>
          </Col>
          <Col className="map" xs={12} md={6}>
              <Image src={MapImage} thumbnail/>
          </Col>
          <Col xs={12} md={6}>
            <h5>From London</h5>
            <p>
              The best way (environmentally and time wise) is train. <br/><br/>

              Take a look on Trainline and book from Kings Cross to Edinburgh. Book in advance to get under
              £100. As the king and queen of last minute, you can get good last minute deals, but
              you’re not promised a bargain! <br/><br/>

              You can go via Glasgow but if you are coming straight to the wedding, Edinburgh is
              the easiest city to travel by public transport. <br/><br/>

              If you are coming from London and fancy an adventure around different parts of the
              Scotland, and want any advice, give us a shout - if we don’t know, the father of the
              bride is the <a href="https://www.youtube.com/watch?v=ImwmQjpCHV0">king of the road (trip)</a>.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <h5>Public Transport from Edinburgh</h5>
            <p>
              Of course we are getting married slightly in the middle of nowhere, but it is worth it.
              However it isn’t too complicated. And honestly, we have so many family members and
              friends with cars I am sure we can all help out with lifts. But just in case: <br/><br/>

              Edin to Leauchers train - Leauchers to St Andrews bus (92B) - St Andrews - Cambo Estate (95).
              London pals, buses up north are very different, you might need cash and you can always ask advice
              from the drivers.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <h5>Driving</h5>
            <p>
              Our friends and family are coming from across different areas, so I am more than certain
              shared lifts will be possible. If you know someone, or are driving and have spare seats,
              please do get in touch we can help set up a carpool if you are happy to, we promise
              everyone invited is wonderful. <br/><br/>

              There are plenty of parking spaces but it is always great for the environment to share!
              Pop the address into the sat nav/Google Maps and you’ll get there no bother. 
            </p>
          </Col>
          <Col xs={12} md={6}>
            <h5>Public Transport from Glasgow</h5>
            <p>
              Glasgow to Edin train - Edin to Leauchers train - Leauchers to St Andrews bus (92B)
              - St Andrews - Cambo Estate (95)
            </p>
          </Col>
          <Col xs={12} md={6}>
            <h5>From St Andrews/Anstruther</h5>
            <p>
              The bus - 95. Ask the bus drivers or locals the best way to get there and they will help.
              They will even stop right at the entrance, although the driveway is long so bring comfy
              shoes for the walk!
            </p>
          </Col>
          <Col xs={12} md={12}>
            <h3 className='staying-there'>
                Staying There
            </h3>
            <p className="description">
            </p>
          </Col>
          <Col className="map" xs={12} md={6}>
              <Image src={MapImage} thumbnail/>
          </Col>
          <Col xs={12} md={6}>
            <h5>St Andrews</h5>
            <h6>(famous for us taking friends here to eat chips on the beach all year round)</h6>
            <p>
              1hour 36 minutes from edinburgh <br/>
              34 minute bus to cambo estate <br/>
              20 minutes drive to Cambo Estate
            </p>
            <h5>Anstruther</h5>
            <h6>(famous for it’s fish and chips!)</h6>
            <p>
              Takes 2hrs from Edinburgh to get there <br/>
              30 minute bus ride to cambo estate <br/>
              15 minute drive to cambo estate
            </p>
          </Col>
          <Col className="city-stays" xs={12} md={6}>
            <h5>City Stays</h5>
            <p>
              There is an option to stay in Dundee but you would need to drive or get a taxi which will
              cost roughly £100.
            </p>
            <h6>Luxury (£200+)</h6>
            <p>
              <a href="https://www.rufflets.co.uk/">
                Rufflets St Andrews  
              </a>
            </p>
            <h6>Middle Ground (£100 - £200)</h6>
            <p>
              <a href="https://www.thebank-anstruther.co.uk/">
                The Bank  
              </a><br/>

              <a href="https://thespindrift.co.uk/">
                The Spindrift Guest House  
              </a>
            </p>
            <h6>Budget (~£100)</h6>
            <p>
              <a href="https://www.newinnstandrews.com/">
                The New Inn
              </a><br/>

              <a href="https://uk.hotels.com/ho367740/the-golf-inn-st-andrews-united-kingdom/">
                The Golf hotel
              </a>
            </p>
          </Col>
          <Col xs={12} md={6}>
            <h5>Airbnb Rental</h5>
            <p>
              We hope we aren’t introducing you to AirBnB but there are always plenty of options.
              If you know anyone coming to the wedding and you’re happy sharing, I’d recommend sharing
              an AirBnB rather than a hotel, it’s better value for money. Book early to try and get
              yourself a place right on the seafront, it really is beautiful (although very cold!)
            </p>
          </Col>
          <Col xs={12} md={12}>
            <h5>Visit Scotland</h5>
            <p>
              Yes, Visit Scotland really does offer up accommodation! Have a look there if you are really struggling for accommodation options. 
              They also share excellent photos of highland cows on their Instagram page. 
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GettingThere;
