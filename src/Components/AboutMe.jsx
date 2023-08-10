import React from "react";
import '../CSS Styling/AboutMe.css';
import coding from '../pictures/coding.jpg';
import Navbar from "./Navbar";
function AboutMe() {
    const pdfUrl = process.env.PUBLIC_URL + '/myResume.pdf';
    return <>
        {/* <Navbar/> */}
        <div className="about-me-container" id="aboutme">
            <h1 className="about-me-heading">ABOUT ME</h1>
            <div className="underline-animated">
                <div className="animated-underline-box"></div>
            </div>
            <div className="about-me-details" data-aos="fade-up" data-aos-delay="100">
                <div className="image-container">
                    <img className="pic" src={coding} />
                </div>
                <div className="my-details" data-aos="fade-up" data-aos-delay="100">
                    <h2 style={{ paddingBottom: "0.4em" }}>Hi, I am <span style={{ color: "#EFDC2E" }}>Saikat Mohanta</span></h2>
                    <li className="details-list">Age - 20</li>
                    <li className="details-list">Nationality - Indian</li>
                    <li className="details-list">Language Proficiency - English, Bengali, Hindi</li>
                    <li className="details-list">Education - BSC Computer Science</li>
                    <li className="details-list">Freelance - Available</li>
                    <a href={pdfUrl} download="sample.pdf">
                    <button className="resume-btn">Download Resume</button>
                    </a>
                </div>
            </div>
        </div>
    </>
}
export default AboutMe;