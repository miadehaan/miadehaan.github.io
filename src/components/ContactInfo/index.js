import React from 'react';
// import "./style.css";

function ContactInfo () {
    return (
        <section className="myContact align-middle align-self-center col-sm-12 d-flex justify-content-center">
            <ul id="contactInfo">
                <li><i className="fas fa-envelope"></i> Email: <a href="mailto:MariannedeHaan14@gmail.com">MariannedeHaan14@gmail.com</a></li>
                <li><i className="fas fa-phone"></i>    Cell: <a href="tel:404-862-8850">(404) 862-8850</a></li>
                <li><i className="fab fa-github"></i>   Github: <a href="https://github.com/miadehaan" target="blank">github.com/miadehaan</a></li>
                <li><i className="fab fa-linkedin"></i> Linkedin Profile: <a href="https://www.linkedin.com/in/marianne-mia-de-haan-78b853100/" target="blank">Linkedin</a></li>
            </ul>
        </section>

    );
}


export default ContactInfo;       
