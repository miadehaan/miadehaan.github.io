import React from 'react';
import './style.css';
import emailLogo from "../../Assets/envelope-regular.svg";
import linkedInLogo from "../../Assets/linkedin-brands.svg";
import githubLogo from "../../Assets/github-square-brands.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
          <div className="row">
              <h5 className="col-12" > 
                  Connect with me!
              </h5>

              <section className="socials col-12">
                  <a href="https://www.linkedin.com/in/marianne-mia-de-haan-78b853100/" > <img src={linkedInLogo} alt="linkedIn link" target="_blank" /> </a>
                  <a href="https://github.com/miadehaan" > <img src={githubLogo} alt="github link" target="_blank" /> </a>
                  <a href="mailto:MariannedeHaan14@gmail.com"> <img src={emailLogo} alt="email link" target="_blank" /> </a>
                  <a href="tel:404-862-8850"> <i className="fas fa-phone" />  </a>
              </section>
              <hr />
              <section className="col-12 copyright">&#169; Copyright 2020 <a href="mailto:mariannedehaan14@gmail.com"> Marianne (Mia) de Haan </a> </section>
          </div>
      </div>
    </footer>
  );
}


export default Footer;
