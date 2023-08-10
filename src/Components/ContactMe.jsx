import React from "react";
import '../CSS Styling/ContactMe.css'
import { EmailForm } from "./EmailForm";
import Navbar from "./Navbar";
function ContactMe(props) {
    return <div id="contactme" >
        {/* <Navbar/> */}
        <h1 className="contact-me-heading">CONTACT ME</h1>
        <div className="underline-animated" style={{ marginBottom: "2em" }}>
            <div className="animated-underline-box"></div>
        </div>
        <div className="contact-me-container">
            <div className="contact-info">
                <h2>Contact Information</h2>
                <p className="contact-info-para">If you like my works and resume and want to discuss about your projects. Feel free to contact me. My contact details are given below. You may also directly send your message from the contact form given below :
                </p>
                <div className="email-info" data-aos="fade-up"
                    data-aos-duration="750">
                    <h2>Email Address:</h2>
                    <p>saikatmohanta43434@gmail.com</p>
                </div>
                <div className="phone-info" data-aos="fade-up"
                    data-aos-duration="750">
                    <h2>Phone Number:</h2>
                    <p>+91 9875436437</p>
                </div>
            </div>
            <EmailForm />
        </div>
    </div>

}
export default ContactMe;