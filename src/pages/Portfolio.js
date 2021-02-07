import React, {useState} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectBlock from "../components/ProjectBlock";
import ProjectBlockv2 from "../components/ProjectBlockv2";

function Portfolio() {

    return (
        <div>
            <Header />
            <main className="container">
                <div className="row">
                    <h1 className="col-12" style={{ textAlign: 'center', color: 'white', marginTop: '50px', marginBottom: '0', fontSize: '50px', textShadow: '2px 1px 1px black' }}>Portfolio</h1>
                    <span className="col-12" style={{ textAlign: 'center', color: 'white', fontSize: '40px',  marginBottom: '100px', marginTop: '0',textShadow: '1px 1px 1px black'}}>...</span>
                </div>
            </main>

            <article style={{ backgroundImage: 'linear-gradient(#fae1dd, #ffffff, #ffffff, #fae1dd)' }}>
                        {/* <ProjectBlock /> */}
                        <ProjectBlockv2 />
                    </article> 
            <Footer />
        </div>

    );
}

export default Portfolio;
