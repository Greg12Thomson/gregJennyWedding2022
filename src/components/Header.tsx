import React from 'react';
import { Button } from 'react-bootstrap';
import BackgroudImage from './DSC02015.jpg';

const style = {
  backgroundImage: `url(${BackgroudImage})`
}

function Header() {
  return (
    <header className="App-header" style={ style }>
      <div className="heading">
        <h2>
          Jenny & Greg
        </h2>
        <p>
          October 8-9, 2022 <span>&#183;</span> Cambo Estate, Scotland
        </p>
        <Button className="rsvp" href="#rsvp">RSVP</Button>
      </div>
    </header>
  );
}

export default Header;
