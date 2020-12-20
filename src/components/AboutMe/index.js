import React from 'react';
import "./style.css";
import {useSpring, animated} from 'react-spring';

function AboutMe() {
    const props = useSpring({
        opacity: 1, from: {opacity: 0},
        config: { duration: 1500 }
    });

    return (
        <main  className="container">
            <div className="row">
                <article className="col-sm-12 content_box">
                    <h1>About Me</h1>

                    <div className="row">
                        <animated.section style={props} className="col-lg-6 col-sm-12">
                            <img src="./Assets/IMG_2096.jpg" alt="Mia at pumpkin patch" className="about_img img-fluid rounded shadow-lg" />
                        </animated.section>

                        <section className="aboutParagraph align-middle align-self-center col-lg-6 col-sm-12">
                            <h2> Hello! </h2>
                            <p> 
                                My name is Mia de Haan, and this is my lovely portfolio!
                                I'm currently taking a Full-Stack Web Development Boot Camp
                                through the Univeristy of Oregon and am on track to complete
                                this course January of 2021.
                            </p>
                            <p> 
                                I'm so excited to build more dynamic, beautiful websites, and continue to learn
                                as much as I can along the way. I can't wait to begin building strong 
                                relationships with clients and help them build the website 
                                of their dreams for their own business.
                            </p>
                        </section>
                    </div>

                    <div className="row">
                        <section className="resume align-middle align-self-center col-lg-6 col-sm-12">
                            <h2> Resume </h2>
                            <a href="./Assets/Resume_deHaan.pdf" target="_blank"> <i className="fas fa-file-download"></i> Download a copy of my resume here! </a>
                        </section>

                        <section className="col-lg-6 col-sm-12">
                            <img src="./Assets/IMG_8692.jpg" alt="Mia with dog on a dock at a lake" className="about_img img-fluid rounded shadow-lg" />
                        </section>

                        {/* <section className="resume align-middle align-self-center col-sm-12">
                            <iframe className="rounded" width="760px" height="700px" src="https://sway.office.com/s/LHKPVry0uO5ucCVH/embed" frameborder="0" marginheight="0" marginwidth="0" max-width="100%" sandbox="allow-forms allow-modals allow-orientation-lock allow-popups allow-same-origin allow-scripts" scrolling="no" style="border: none; max-width: 100%; max-height: 100vh" allowfullscreen mozallowfullscreen msallowfullscreen webkitallowfullscreen></iframe>
                        </section> */}
                    </div>

                </article> 
            </div>
        </main>

    );
}

export default AboutMe;