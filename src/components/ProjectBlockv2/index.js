import React, { useState } from 'react';
import "./style.css";
import projects from "../../utils/projects.js";
import { Row, Col, Container, Button } from "react-bootstrap";
import ProjModal from "../../components/ProjModal"


function ProjectBlock() {
    // console.log(projects);

    const [modalShow, setModalShow] = useState(false);
    const [selectedProj, setSelectedProj] = useState();


    return (
        <Container>
        <Row>
            {projects.map( (res, index) => {
                // console.log(index);
                return(
                    <Col md={4} sm={12}  key={res.key} style={{ margin: '0', padding: '10px' }}>
                    
                        <div className="imgContainer">
                            <img className="appImage" variant="top" src={res.img} alt={res.alt} />
                            
                            <div className="overlay">
                                {/* Image Overlay Text/Links on Hover */}
                                <div className="infoOverlay">
                                    <h5 className="projTitle" > {res.title} </h5>

                                    {/* <span style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button variant="light" 
                                            onClick={() => {
                                                setModalShow(true);
                                                setSelectedProj(res.key);
                                            }} 
                                        >
                                            Learn More
                                        </Button>

                                        <ProjModal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                            data={selectedProj}
                                        />
                                    </span> */}

                                    <div className="links">
                                        <a className="portfolio" href={res.deployedLink} target="blank"> Visit App </a>
                                            <span> | </span>
                                        <a className="portfolio" href={res.githubLink} target="blank"> Check out the code! </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Col>

                    // <Col lg={4} md={6} sm={12} style={{ paddingBottom: '30px' }}>
                    // <Card key={res.key} className="card_container" style={{ width: '100%' }}>
                    //     <Card.Img className="appImage" variant="top" src={res.img} alt={res.alt} />

                    //     <Card.Header> {res.title} </Card.Header>
                    //     <Card.Body>
                    //         <Card.Text>
                    //             <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
                    //                 Description: {res.description}
                    //             </ReactTextCollapse>
                    //         </Card.Text>
                    //         <div className="techList">
                    //             Technologies Used:
                    //             <ul>
                    //                 {res.technology.map((tech, index) => {
                    //                     // console.log(tech);
                    //                     return (
                    //                         <li key={index}> {tech} </li>
                    //                     )
                    //                 })}
                    //             </ul>
                    //         </div>
                    //         <div className="links">
                    //             <a className="portfolio" href={res.deployedLink} target="blank"> Go to App </a>
                    //             <span> | </span>
                    //             <a className="portfolio" href={res.githubLink} target="blank"> Check out the code! </a>
                    //         </div>
                    //     </Card.Body>
                    // </Card>
                    // </Col>
                )
            })}            
        </Row>
        </Container>
    )
}

export default ProjectBlock;