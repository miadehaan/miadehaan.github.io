import React, {useState} from 'react';
import {Modal, Button } from "react-bootstrap";
import projects from "../../utils/projects.js";

function ProjModal(props) {
    console.log(props.data);
    const key = props.data;


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {projectInfo}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4> Description: </h4>
            <p>
                {/* {props.data.description} */}
            </p>

            {/* <h4> Technologies Used: </h4>
            <ul>
                {props.data.technology.map((tech, index) => {
                    
                return (
                    <li key={index}> {tech} </li>
                    )
                })}
            </ul> */}
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    );
}

export default ProjModal;