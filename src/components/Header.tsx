import React from 'react';
import BackgroundImage from '../images/DSC02015.jpg';
import {Link} from "react-router-dom";
import {Pages} from "./NavBar";

const style = {
  backgroundImage: `url(${BackgroundImage})`
}

function Header() {
  return (
    <header className="App-header" style={ style }>
      <div className="heading">
        <h2>
          Jenny & Greg
        </h2>
        <p className="sub-heading">
          October 8-9, 2022 <span>&#183;</span> Cambo Estate, Scotland
        </p>
        <Link className="button" to={Pages.Rsvp}>RSVP</Link>
      </div>
    </header>
  );
}

export default Header;
