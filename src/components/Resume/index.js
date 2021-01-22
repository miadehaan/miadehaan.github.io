import React from 'react';
import "./style.css";
import resume from "../../Assets/Resume2021.pdf"
import compIcon from "../../Assets/laptop96.png"

function Resume() {

    return (
        <div className="resumeContent">
            <span className="rectangle">
                <h1> Resume </h1>
                <a className="resumeDownload" href={resume} target="_blank"> 
                    {/* <i className="fas fa-file-download" />  */}
                    <img src={compIcon} alt="" />
                    {/* <a target="_blank" href="https://icons8.com/icons/set/laptop">Laptop icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                    
                    Download a copy of my resume here! 

                    
                </a>
                
            </span>
        </div> 

    );
}

export default Resume;