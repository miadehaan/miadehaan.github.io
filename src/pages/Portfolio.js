import React, {useState} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectBlock from "../components/ProjectBlock";

function Portfolio() {

    return (
        <div>
            <Header />
            <main className="container">
                <div className="row">
                    <h1 className="col-12" style={{ textAlign: 'center', marginTop: '50px', marginBottom: '100px', fontSize: '50px' }}>Portfolio</h1>

                    <article className="col-12" style={{ backgroundColor: '#fae1dd' }}>
                        <ProjectBlock />
                    </article> 

                </div>
            </main>
            <Footer />
        </div>

    );
}

export default Portfolio;
