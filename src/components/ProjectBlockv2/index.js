import React, { useState } from 'react';
import "./style.css";
import projects from "../../utils/projects.js";
import { Row, Col, Container, Button } from "react-bootstrap";
import ProjModal from "../../components/ProjModal"
import styled, { keyframes } from 'styled-components';
import {  flipInX } from 'react-animations';


function ProjectBlock() {
    // console.log(projects);

    const [modalShow, setModalShow] = useState(false);
    const [selectedProj, setSelectedProj] = useState(); // collecting info of clicked on item

    // react-animations
    const FlipInX = styled.div`
        animation: 1s ${keyframes`${flipInX}`}
    `;


    return (
        <Container>
        <Row style={{ paddingTop: '60px', paddingBottom: '60px' }}>
            {projects.map( (res, index) => {
                // console.log(index);
                return(
                    <Col md={4} sm={12}  key={res.key} style={{ margin: '0', padding: '22px' }}>
                        {/* <FlipInX> */}
                        <div className="imgContainer" style={{boxShadow: '2px 2px 4px grey'}}>
                            <img className="appImage" variant="top" src={res.img} alt={res.alt} />
                            
                            <div className="overlay">
                                {/* Image Overlay Text/Links on Hover */}
                                <div className="infoOverlay">
                                    <h5 className="projTitle" > {res.title} </h5>

                                    <span style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button variant="light" 
                                            onClick={() => {
                                                setModalShow(true);
                                                setSelectedProj(res);
                                            }} 
                                        >
                                            Learn More
                                        </Button>

                                        <ProjModal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                            data={selectedProj}
                                        />
                                    </span>

                                    <div className="projLinks">
                                        <a className="portfolio" href={res.deployedLink} target="blank"> Visit App </a>
                                            <span> | </span>
                                        <a className="portfolio" href={res.githubLink} target="blank"> Check out the code! </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* </FlipInX> */}
                    </Col>
                )
            })}            
        </Row>
        </Container>
    )
}

export default ProjectBlock;