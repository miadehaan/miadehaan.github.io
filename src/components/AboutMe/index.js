import React from 'react';
import "./style.css";
// import textBackground from "../../Assets/textBackground_shadow.png";
import profilePic from "../../Assets/profile.jpg";
import styled, { keyframes } from 'styled-components';
import {  fadeInLeft, fadeInRight } from 'react-animations';
import rightArrow from "../../Assets/angle-right-solid.svg";

function AboutMe() {
    // react-animations
    const FadeInLeft = styled.div`
        animation: 1s ${keyframes`${fadeInLeft}`}
    `;

    const FadeInRight = styled.div`
        animation: 1s ${keyframes`${fadeInRight}`}
    `;

    return (
        <div className="aboutContent container" >
            <div className="row">
                <h1 className="col-12 aboutTitle"> About Me </h1>

                <div className="col-md-6 col-12">
                    <FadeInLeft>
                        <img id="profile" src={profilePic} alt="headshot of myself" />
                    </FadeInLeft>
                </div>
                

                <div className="col-md-6 col-12">
                    <FadeInRight>
                        <p className="aboutParagraph"> 
                            My name is Mia de Haan, and I'm a Full-Stack Web Developer with a focus in 
                            Front-End React JS and a background in mechanical engineering.
                            I recently earned a certificate for Full-Stack Web Development at the 
                            University of Oregon, while simultaneously working full-time. I'm currently seeking
                            a full-time position as a Front-End Developer, and hope to continue to grow and learn as 
                            much as I can to better myself and the websites I create.
                        </p>
                    </FadeInRight>
                </div>
            </div>

            <div className="row">
                <h1 className="col-12 skillsTitle"> Skillset </h1>

                <div className="col-sm-2" />
                <ul className="col-sm-4 col-6 skillsList">
                    <li> <img src={rightArrow} className="arrow" alt="" />  HTML5 </li>
                    <li> <img src={rightArrow} className="arrow" alt="" /> CSS3 </li>
                    <li> <img src={rightArrow} className="arrow" alt="" /> Bootstrap </li>
                    <li> <img src={rightArrow} className="arrow" alt="" /> JavaScript </li>
                    <li> <img src={rightArrow} className="arrow" alt="" /> jQuery </li>
                    <li> <img src={rightArrow} className="arrow" alt="" /> React.js </li>
                </ul>

                <ul className="col-sm-4 col-6 skillsList">
                    <li> <img src={rightArrow} className="arrow" alt="" /> Express.js </li>
                    <li> <img src={rightArrow} className="arrow" alt="" /> Node.js </li>
                    <li> <img src={rightArrow} className="arrow" alt="" /> MySQL </li>
                    <li> <img src={rightArrow} className="arrow" alt="" /> MongoDB </li>
                    <li> <img src={rightArrow} className="arrow" alt="" /> Git </li>
                </ul>
                <div className="col-sm-2" />

            </div>
        </div> 

    );
}

export default AboutMe;