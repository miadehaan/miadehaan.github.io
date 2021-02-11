import React from 'react';
import "./style.css";

function ContactForm(props) {
    return (
        <form>
            <section className="form-group">
                <label >Name *</label>
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
            <section className="form-group">
                <label >Email Address *</label>
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
            <section className="form-group">
                <label >Message *</label>
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
            <section className="">
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
