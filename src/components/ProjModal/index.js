import React, {useState} from 'react';
import {Modal, Button } from "react-bootstrap";
import "./style.css"

function ProjModal(props) {
    console.log(props.data);

    return (
        <>
        {/* Only render onces data is available through props */}
        {props.data ? ( 
            <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Application: {props.data.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4> Description: </h4>
                    <p>
                        {props.data.description}
                    </p>

                    <h4> Technologies Used: </h4>
                    <ul>
                        {props.data.technology.map((tech, index) => {
                            
                        return (
                            <li key={index}> {tech} </li>
                            )
                        })}
                    </ul>
                    
                    <div>
                        <img className="modalImg" variant="top" src={props.data.img} alt={props.data.alt} />
                    </div>

                    <div className="linksModal">
                        <a href={props.data.deployedLink} target="blank"> Visit App </a>
                            <span> | </span>
                        <a href={props.data.githubLink} target="blank"> Check out the code! </a>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
                </Modal>
            ) : (
                <>
                </>
            )}
        </>
    );
}

export default ProjModal;