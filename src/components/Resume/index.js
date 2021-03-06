import React from 'react';
import "./style.css";
import resume from "../../Assets/Resume2021.pdf"

function Resume() {

    return (
        <div className="resumeContent">
                <div id="resumeHeader">
                    <h1> Resume </h1>
                    <span className="dots">...</span>
                </div>
                
                <div>
                    <a className="resumeDownload" href={resume} target="_blank"> 
                        <span> Download a copy of my resume here! </span>
                        <i className="fas fa-file-download" />     
                    </a>
                </div>

                <iframe 
                    src="https://sway.office.com/s/LHKPVry0uO5ucCVH/embed" 
                    title="resume"
                    style={{
                        width: '760px',
                        height: '500px',
                        frameborder: '0',
                        marginHeight: "0",
                        marginWidth: "0",
                        maxWidth: "100%",
                        border: 'none',
                        maxHeight: '100vh'
                    }}
                    sandbox="allow-forms allow-modals allow-orientation-lock allow-popups allow-same-origin allow-scripts" 
                    scrolling="no"
                    allowFullScreen={true}
                    mozallowfullscreen="true"
                    msallowfullscreen="true"
                    webkitallowfullscreen="true"
                />
            
        </div> 

    );
}

export default Resume;