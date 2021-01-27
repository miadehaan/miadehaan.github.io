import React from 'react';
import "./style.css";
import projects from "../../utils/projects.js";
import { Card, Row, Col, Container, Accordion, Button } from "react-bootstrap";

function ProjectBlock() {
    // console.log(projects);

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
                        <Accordion defaultActiveKey="0">
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Show Description
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="1">
                                <Card.Text>
                                    Description: {res.description}
                                </Card.Text>
                            </Accordion.Collapse>
                        </Accordion>

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