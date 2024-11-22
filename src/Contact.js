// src/components/About.js
import React from 'react';


const Contact = () => {
    return (

        

        <div className="container my-5">
            <h2 className="text-center mb-4">Contact Us</h2>
            <form className="mx-auto" style={{ maxWidth: "600px" }}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name of patient</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="subject" placeholder="Enter the subject" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="5" placeholder="Write your message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
                <div className="about-container">
            <h1 className="about-title">Contact Info</h1>
            <p className="about-text">
                Mobile - 0777240518  /  Home - 0352226371.<br/>Thank you chamike to create me
            </p>
        </div>
            </form>
        </div>

        
        
    );
};

export default Contact;
