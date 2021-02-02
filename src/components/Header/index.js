import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Logo from "../../Assets/PortfolioLogo1.png";
import {Navbar, Nav } from "react-bootstrap";

function Header() {

  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand >
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="" className="logo"/>
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav" >
        <Nav className=" ">
          <Link to="/home" className="nav-link"> About </Link>
          <Link to="/portfolio" className="nav-link"> Portfolio </Link>
          <Link to="/contact" className="nav-item nav-link">Contact Me</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}


export default Header;


