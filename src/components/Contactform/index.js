import React from 'react';
import "./style.css";

function ContactForm() {
    return (
        <form className="col-lg-6 col-sm-12 content_box">
            <h3 className="d-flex justify-content-center">Leave your contact information below!</h3>
            <section className="form-group col-lg-12 col-md-12 col-sm-12">
                <label for="exampleFormControlInput1">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Katy Smith"/>
            </section>
            <section className="form-group col-lg-12 col-md-12 col-sm-12">
                <label for="exampleFormControlInput2">Email Address</label>
                <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com"/>
            </section>
            <section className="form-group col-lg-12 col-md-12 col-sm-12">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            </section>
            <section className="col-lg-3 col-md-3 col-sm-3">
                <button type="submit" className="btn btn-primary mb-4">Submit</button>
            </section>
        </form>

    );
}

export default ContactForm;
