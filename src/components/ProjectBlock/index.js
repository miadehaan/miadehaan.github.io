import React from 'react';
import "./style.css";
import projects from "../../utils/projects.js";
import { Card, CardDeck } from "react-bootstrap";

function ProjectBlock() {
    // console.log(projects);

    return (
        <div className="cardDeck">
            <CardDeck>
                {projects.map( (res, index) => {
                    // console.log(index);

                    return(
                        <CardDeck key={res.key} >
                            <Card className="img_container " style={{ width: '20rem' }}>
                                <Card.Img className="image" variant="top" src={res.img} alt={res.alt} />
                                
                                <div className="hoverLinks centered">
                                    <a className="portfolio" href={res.deployedLink} target="blank"> 
                                        <h4> {res.title} </h4> 
                                    </a>
                                    <a className="portfolio" href={res.githubLink} target="blank"> Check out the code!</a>
                                </div>

                            </Card>
                        </CardDeck>
                    )
                })}
            </CardDeck>
        </div>
    )
}

export default ProjectBlock;