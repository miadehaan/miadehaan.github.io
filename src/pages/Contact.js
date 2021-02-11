import React, {useState} from 'react';
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import firebase from "../firebase";
import Axios from 'axios';
// import { Alert } from 'bootstrap';
import profilePic from "../Assets/profile2.jpg";
import emailLogo from "../Assets/envelope-regular.svg";
import linkedInLogo from "../Assets/linkedin-brands.svg";
import githubLogo from "../Assets/github-square-brands.svg";

function Contact() {

  const [input, setInput] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Firestore
  const docRef = firebase.firestore().collection("emails");

  const handleInputChange = (e) => {
    setInput({
        ...input, 
      [e.target.name]: e.target.value
    })
  
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Send email with new submission && save to DB
    // Validation for all input fields
    if (input.name === "" || input.email === "" || input.message === "" ) {
      alert("Please fill out all fields before submitting.");
    
    }
    else {
      sendEmail();
    }

    setInput({
      name: "",
      email: "",
      message: ""
    })

    console.log(input);
  }

  const sendEmail = () => {
    Axios.post(
      'https://us-central1-mia-portfolio.cloudfunctions.net/submit',
      input
    )
    .then( res => {
      console.log("email sent");
      alert("Your information has been submitted. Thank you!");

      // Save info to Firestore DB 
      docRef.add({
          name: input.name,
          email: input.email,
          message: input.message,
          timeStamp: new Date(),
      })
      // .then( () => {
      //     // console.log("Information saved to DB & email sent!");
      // });
    })
    .catch(error => {
      console.log(error)
    })
  }  

  return (
    <div>
      <Header />
      <div className="container" style={{paddingBottom: '80px'}}>
        <div className="row" >
          <h1 className="col-12 " style={{ textAlign: 'center', fontSize: '50px', color: 'white', textShadow: '2px 1px 1px black' }}>Contact Information</h1>
          <span className="col-12 dots" style={{ textAlign: 'center'}}>...</span>
        </div>
      </div>

      <section style={{ background: '#ffffff'}} >
        <div className="container">
          <div className="row" >

            <div className="col-md-6 col-12">
              <div className="row" >
                <h2 className="col-12" style={{ textAlign: 'left', margin: "100px 0 60px 0"}}> Let's Chat! </h2>
                
                <div className="col-12">
                  <div className="row" >
                    <section className="col-4" style={{ textAlign: 'right'}}>
                        <img id="headshot" src={profilePic} alt="headshot of myself" />
                    </section>

                    <section  className="col-8">
                      <p style={{ fontWeight: 'bold', marginBottom: '0', paddingTop: '22px' }}>
                        Mia (Marianne) de Haan
                      </p>
                      <a href="mailto:MariannedeHaan14@gmail.com"> <img style={{ width: '20px' }} src={emailLogo} alt="email link" target="_blank" /> MariannedeHaan14@gmail.com </a>
                    </section>
                  </div>
                </div>

                <section className="socials col-12">
                  <a href="https://www.linkedin.com/in/marianne-mia-de-haan-78b853100/" > <img src={linkedInLogo} alt="linkedIn link" target="_blank" /> </a>
                  <a href="https://github.com/miadehaan" > <img src={githubLogo} alt="github link" target="_blank" /> </a>
                  <a href="tel:404-862-8850"> <i className="fas fa-phone" />  </a>
              </section>
              </div>
            
            </div>

            <div className="col-md-6 col-12">
              <ContactForm 
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                data={input}
              />
            </div>

            </div>
        </div>
      </section>
      <Footer />
    </div>

  );
}

export default Contact;
