import React from 'react';
import "./style.css";
import textBackground from "../../Assets/textBackground_shadow.png"

function ContactInfo () {
    return (
        <section className="myContact col-12 d-flex justify-content-center">
            <img className="textBackgroundImg" src={textBackground} alt="" />
            <ul id="contactInfo" className="centeredList">
                <li><i className="fas fa-envelope"></i> Email: <a href="mailto:MariannedeHaan14@gmail.com">MariannedeHaan14@gmail.com</a></li>
                <li><i className="fas fa-phone"></i>    Cell: <a href="tel:404-862-8850">(404) 862-8850</a></li>
                <li><i className="fab fa-github"></i>   Github: <a href="https://github.com/miadehaan" target="blank">github.com/miadehaan</a></li>
                <li><i className="fab fa-linkedin"></i> Linkedin Profile: <a href="https://www.linkedin.com/in/marianne-mia-de-haan-78b853100/" target="blank">Linkedin</a></li>
            </ul>
        </section>

    );
}


export default ContactInfo;       
