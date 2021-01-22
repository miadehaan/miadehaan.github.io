import React from 'react';
import "./landing.css"
import {Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import Logo from "../Assets/PortfolioLogo1.png";
// import blob from "../Assets/Blob-Shape.png";
import styled, { keyframes } from 'styled-components';
import { bounce, rollIn, flipinY } from 'react-animations';

function Landing() {
    // react-animations
    const Bounce = styled.div`
        animation: 3s ${keyframes`${bounce}`}
    `;

    const RollIn = styled.div`
        animation: 1s ${keyframes`${rollIn}`}
    `;

    const FlipinY = styled.div`
        animation: 1s ${keyframes`${flipinY}`}
    `;

    return (
        <div className="landingPg">
            <Container>
                <Row>
                    <Col md={{ span: 6 }} xs={{ span: 12 }} >
                        <RollIn>
                            <Image src={Logo} fluid className="brandLogo" alt="logo" />
                        </RollIn>
                    </Col>
                    
                    <Col md={{ span: 6 }} xs={{ span: 12 }}> 
                        <div id="textContainer">
                            <RollIn>
                            <div className="verticalLine">
                                <h1 className="landingText"> 
                                    Front-End Web Developer. <br />
                                    Lifelong Learner.
                                </h1>
                            </div> 
                            </RollIn>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={{ span: 6, offset: 3 }} >
                        <Link to="/home" className="nav-item nav-link" id="enterBtn" >
                            <Bounce>
                                <Button variant="outline-dark" size="md"> Checkout my Work! </Button>
                            </Bounce>
                        </Link>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}


export default Landing;
