import React from 'react';
import "./style.css";
import resume from "../../Assets/Resume2021.pdf"

function Resume() {

    return (
        <div className="resumeContent">
                <h1> Resume </h1>
                <a className="resumeDownload" href={resume} target="_blank"> 
                    <i className="fas fa-file-download" /> 
                    Download a copy of my resume here! 
                    
                </a>
        </div> 

    );
}

export default Resume;