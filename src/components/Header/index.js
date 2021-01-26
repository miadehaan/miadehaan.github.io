import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Logo from "../../Assets/PortfolioLogo1.png";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="" className="logo"/>
          
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <nav className="navbar-nav">
            <Link to="/home" className="nav-link"> About </Link>
            <Link to="/portfolio" className="nav-link"> Portfolio </Link>
            <Link to="/contact" className="nav-item nav-link">Contact Me</Link>
          </nav>
        </nav>
      </nav>
  );
}


export default Header;


