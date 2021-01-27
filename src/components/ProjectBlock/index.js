import React from 'react';
import "./style.css";
import projects from "../../utils/projects.js";
import { Card, Row, Col, Container } from "react-bootstrap";
import ReactTextCollapse from "react-text-collapse";

function ProjectBlock() {
    // console.log(projects);

    const TEXT_COLLAPSE_OPTIONS = {
        collapse: true, // default state when component rendered
        collapseText: "... show more", // text to show when collapsed
        expandText: "show less", // text to show when expanded
        minHeight: 80, // component height when closed
        maxHeight: 150,
        textStyle: {
            // pass the css for the collapseText and expandText here
            color: "blue",
            fontSize: "16px",
        },
    };
    

    return (
        <Container>
        <Row>
            {projects.map( (res, index) => {
                // console.log(index);
                return(
                    <Col lg={4} md={6} sm={12} style={{ paddingBottom: '30px' }}>
                    <Card key={res.key} className="card_container" style={{ width: '100%' }}>
                        <Card.Img className="appImage" variant="top" src={res.img} alt={res.alt} />

                        <Card.Header> {res.title} </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
                                    Description: {res.description}
                                </ReactTextCollapse>
                            </Card.Text>

                            <div className="techList">
                                Technologies Used:
                                <ul>
                                    {res.technology.map((tech, index) => {
                                        // console.log(tech);
                                        return (
                                            <li key={index}> {tech} </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            
                            <div className="links">
                                <a className="portfolio" href={res.deployedLink} target="blank"> Go to App </a>
                                <span> | </span>
                                <a className="portfolio" href={res.githubLink} target="blank"> Check out the code! </a>
                            </div>

                        </Card.Body>
                    </Card>

                    </Col>
                )
            })}            
        </Row>
        </Container>
    )
}

export default ProjectBlock;