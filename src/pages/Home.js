import React from 'react';
import "./home.css";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Freelance from "../components/Freelance";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
// import UpArrow from "../Assets/chevron-up-solid.svg";

function Home() {

  return (
    <div className="homePage">
      <Header />

      <section className="container" style={{ backgroundColor: '#fae1dd', marginBottom: '110px'}} >
        <div className="row" id="about" >
          <article className="col-12" >
              <AboutMe />
          </article>
        </div>
      </section>

      {/* <section className="container" style={{ marginBottom: '200px'}} >
        <Freelance />
      </section> */}


      <section className="container" style={{ marginBottom: '200px', textAlign: 'center'}} >
        <Skills />
      </section>


      <section id="resume" className="container resumeContainer" style={{ textAlign: 'center'}} >
        <div className="col-12 bg">
          <Resume />
        </div>
      </section>

      {/* Back to Top Button */}
      {/* <a id="backToTop" className="nav-link" href="#top"> <img src={UpArrow} alt="FontAwesome Up Arrow"/> </a> */}
    
      <Footer />
    </div>
  );
}


export default Home;
