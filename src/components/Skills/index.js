import React from 'react';
import "./style.css";
import rightArrow from "../../Assets/angle-right-solid.svg";

function Skills() {

    return (
        <div className="container" >
            <div className="row" >
                <div className="col-12" style={{ paddingBottom: '60px'}}>
                    <h1 className=" skillsTitle"> Skillset </h1>
                    <span className="dots">...</span>
                </div>


                <div className="col-sm-2" />
                <ul className="col-sm-4 col-6 skillsList">
                    <li> <img src={rightArrow} className="arrow" alt="" />  HTML5 </li>
                    <li> <img src={rightArrow} className="arrow" alt="" /> CSS3 </li>
                    <li> <img src={rightArrow} className="arrow" alt="" /> Bootstrap </li>
                    <li> <img src={rightArrow} className="arrow" alt="" /> JavaScript </li>
                    <li> <img src={rightArrow} className="arrow" alt="" /> jQuery </li>
                    <li> <img src={rightArrow} className="arrow" alt="" /> React.js </li>
                </ul>

                <ul className="col-sm-4 col-6 skillsList">
                    <li> <img src={rightArrow} className="arrow" alt="" /> Express.js </li>
                    <li> <img src={rightArrow} className="arrow" alt="" /> Node.js </li>
                    <li> <img src={rightArrow} className="arrow" alt="" /> MySQL </li>
                    <li> <img src={rightArrow} className="arrow" alt="" /> MongoDB </li>
                    <li> <img src={rightArrow} className="arrow" alt="" /> Git </li>
                </ul>
                <div className="col-sm-2" />

            </div>
        </div> 

    );
}

export default Skills;