import React from 'react';
import "./style.css";
import projects from "../../utils/projects.js";

function ProjectBlock() {
    // console.log(projects);

    return (
        <div className="row">
            {projects.map( res => {
                return(
                    <section key={res.key} className="col-lg-6 col-md-6 col-sm-12">
                        <figure className="img_container">
                            <img src={res.img} alt={res.alt} className="portfolio-thumbnail"/>
                            <figcaption className="text-block">
                                <a className="portfolio" href={res.deployedLink} target="blank"> <h4>{res.title}</h4> </a>
                                <a className="portfolio" href={res.githubLink} target="blank"> Check out the code!</a>
                            </figcaption>
                        </figure>
                    </section>
                )
            })}
        </div>
    );
}

export default ProjectBlock;