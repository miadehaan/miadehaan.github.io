import React from 'react';
// import './style.css';
import ProjectBlock from "../components/ProjectBlock";

function Portfolio() {
    return (
        <div>
            <main  className="container">
                <div className="row">
                    <article className="col-lg-12 col-md-12 col-sm-12 content_box">
                        <h1>Portfolio</h1>
                        <ProjectBlock />
                    </article> 
                </div>
            </main>
            
        </div>
    );
}

export default Portfolio;
