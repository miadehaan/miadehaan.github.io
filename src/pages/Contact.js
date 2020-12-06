import React from 'react';
import ContactForm from "../components/Contactform";
import ContactInfo from "../components/ContactInfo";

function Contact() {
  return (
    <div>
      <main className="container">
      <div className="row">
          <h1 className="col-12">Contact Information</h1>
          <ContactInfo />
          <ContactForm />
        </div>
      </main>
    </div>

  );
}

export default Contact;
