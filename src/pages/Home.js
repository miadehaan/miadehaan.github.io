import React from 'react';
import "./home.css";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Resume from "../components/Resume";
import ProjectBlock from "../components/ProjectBlock";
import Footer from "../components/Footer";
import UpArrow from "../Assets/chevron-up-solid.svg";

function Home() {

  return (
    <div className="homePage">
      <Header />

      <main className="container" style={{ backgroundColor: '#fae1dd', marginBottom: '200px'}} >
        <div className="row" id="about" >
          <article className="col-12" >
              <AboutMe />
          </article>
        </div>
      </main>

      <div id="resume" className="resumeContainer" style={{ backgroundColor: '#ffffff', height: '200px' }} >
        <div className="col-12">
          <Resume />
        </div>
      </div>

      <div  className="container">
        <div id="portfolio" classame="row">
          <h1 className="col-12" style={{ textAlign: 'center', marginTop: '250px', marginBottom: '50px', fontSize: '50px' }}>Portfolio</h1>
          <article className="col-12" style={{ backgroundColor: '#fae1dd' }}>
              <ProjectBlock />
          </article> 
        </div>
      </div>

      {/* Back to Top Button */}
      <a id="backToTop" className="nav-link" href="#top"> <img src={UpArrow} alt="FontAwesome Up Arrow"/> </a>
    
      <Footer />
    </div>
  );
}


export default Home;
