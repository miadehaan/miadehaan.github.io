import React, {useState} from 'react';
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import firebase from "../firebase";


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

    // Save info to Firestore DB 
        // Validation for all input fields
        if (input.name === "" || input.email === "" || input.message === "" ) {
          alert("Please fill out all fields before submitting.");
      }
      else {
          docRef.add({
              name: input.name,
              email: input.email,
              message: input.message,
              timeStamp: new Date(),
          }).then( () => {
              console.log("Information saved to DB!");
              alert("Your information has been submitted. Thank you!");
          }).catch( (error) => {
              console.log("Got an error: ", error)
          });
      }

    setInput({
      name: "",
      email: "",
      message: ""
    })

    console.log(input);
  }

  

  return (
    <div>
      <Header />
      <main className="container">
      <div className="row">
          <h1 className="col-12" style={{ textAlign: 'center' }}>Contact Information</h1>
          <ContactForm 
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
            data={input}
          />
        </div>
      </main>
      <Footer />
    </div>

  );
}

export default Contact;
