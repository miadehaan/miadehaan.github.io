import React from 'react';
import "./style.css";
import projects from "../../utils/projects.js";
import { CardColumns, Card, Button } from "react-bootstrap";

function ProjectBlock() {
    // console.log(projects);

    return (
        <div className="cards">
            {/* <CardColumns> */}
            <div className="card-columns">
                {projects.map( (res, index) => {
                    // console.log(index);
                    return(
                        <Card key={res.key} className="card_container" style={{ width: '18rem' }}>
                            <Card.Img className="appImage" variant="top" src={res.img} alt={res.alt} />

                            <Card.Header> {res.title} </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Description: {res.description}
                                </Card.Text>
                                <div >
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
                    )
                })}
            {/* </CardColumns> */}
            </div>
        </div>
    )
}

export default ProjectBlock;