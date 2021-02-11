import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Logo from "../../Assets/PortfolioLogo1.png";
import {Navbar, Nav } from "react-bootstrap";
import linkedInLogo from "../../Assets/linkedin-brands.svg";
import githubLogo from "../../Assets/github-square-brands.svg";

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
          <a className="headerSocial" href="https://www.linkedin.com/in/marianne-mia-de-haan-78b853100/" > <img src={linkedInLogo} alt="linkedIn link" target="_blank" /> </a>
          <a className="headerSocial" href="https://github.com/miadehaan" > <img src={githubLogo} alt="github link" target="_blank" /> </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}


export default Header;


