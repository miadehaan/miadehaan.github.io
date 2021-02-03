import React from 'react';
import "./home.css";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
// import UpArrow from "../Assets/chevron-up-solid.svg";

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


        <div id="resume" className="container resumeContainer" style={{ }} >
          <div className="col-12 bg">
            <Resume />
          </div>
      </div>

      {/* Back to Top Button */}
      {/* <a id="backToTop" className="nav-link" href="#top"> <img src={UpArrow} alt="FontAwesome Up Arrow"/> </a> */}
    
      <Footer />
    </div>
  );
}


export default Home;
