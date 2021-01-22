import React from 'react';
import "./style.css";

function ContactForm(props) {
    return (
        <form className="col-lg-6 col-sm-12">
            <h3 className="formTitle d-flex justify-content-center">Leave your contact information below!</h3>
            <section className="form-group col-lg-12 col-md-12 col-sm-12">
                <label >Name</label>
                <input 
                    name="name"
                    type="text" 
                    value={props.data.name || "" }
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="name"
                    onChange={props.handleInputChange}
                />
            </section>
            <section className="form-group col-lg-12 col-md-12 col-sm-12">
                <label >Email Address</label>
                <input 
                    name="email"
                    type="email" 
                    value={props.data.email || "" }
                    className="form-control" 
                    id="exampleFormControlInput2" 
                    placeholder="name@example.com"
                    onChange={props.handleInputChange}
                />
            </section>
            <section className="form-group col-lg-12 col-md-12 col-sm-12">
                <label >Message</label>
                <textarea 
                    name="message"
                    type="text" 
                    value={props.data.message || "" }
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="4"
                    onChange={props.handleInputChange}
                />
            </section>
            <section className="col-lg-3 col-md-3 col-sm-3">
                <button 
                    type="submit" 
                    className="btn submitBtn mb-4"
                    onClick={props.handleFormSubmit}
                >
                    Submit
                </button>
            </section>
        </form>

    );
}

export default ContactForm;
