import React from 'react';
import BackgroundImage from '../images/DSC02015.jpg';
import {Link} from "react-router-dom";
import {Pages} from "./NavBar";

function Header() {
  return (
    <header className="App-header">
      <div className="heading">
        <h2>
          Jennifer & Gregor
        </h2>
        <p className="sub-heading">
          Saturday 8th October, 2022 <span>&#183;</span> Cambo Estate, Scotland
        </p>
        <Link className="button" to={Pages.Rsvp}>RSVP</Link>
      </div>
    </header>
  );
}

export default Header;
