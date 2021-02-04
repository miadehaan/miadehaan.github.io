import React from 'react';
import "./style.css";
// import textBackground from "../../Assets/textBackground_shadow.png";
import profilePic from "../../Assets/profile.jpg";
import styled, { keyframes } from 'styled-components';
import {  fadeInLeft, fadeInRight } from 'react-animations';

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

        </div> 
    );
}

export default AboutMe;