import React from "react";
import '../CSS Styling/Services.css';
import Navbar from "./Navbar";
function Services(props) {
    return <div className="services-container" id="services">
        {/* <Navbar /> */}
        <h1 className="heading">MY SERVICES</h1>
        <div className="underline-animated">
            <div className="animated-underline-box"></div>
        </div>
        <div className="services-list">
            <div className="services" data-aos="fade-up"
                data-aos-duration="1000">
                <h1>01</h1>
                <div className="services-list-heading">
                    H
                </div>
                <div className="services-details">
                    <h3>Web Development</h3>
                    <p>I can create full-stack, modern and interactive website based on the requirement.I have good experience of MERN Stack and is passionate to learn any new technology if required.</p>
                </div>
            </div>
            <div className="services" data-aos="fade-up"
                data-aos-duration="1000">
                <h1>02</h1>
                <div className="services-list-heading">
                    H
                </div>
                <div className="services-details">
                    <h3>Technical Writing</h3>
                    <p>I can write technical articles and blogs for your websites on various technology related to web developement and also about the differnt data structures & algorithms.</p>
                </div>
            </div>
            <div className="services" data-aos="fade-up"
                data-aos-duration="2000">
                <h1>03</h1>
                <div className="services-list-heading">
                    H
                </div>
                <div className="services-details">
                    <h3>Video Editing</h3>
                    <p>I can edit videos of different types by adding different cuts, text, motion graphics and subtitles to make your video look professional and make it stand out in various social media platforms.</p>
                </div>
            </div>
            <div className="services" data-aos="fade-up"
                data-aos-duration="2000">
                <h1>04</h1>
                <div className="services-list-heading">
                    H
                </div>
                <div className="services-details">
                    <h3>Teaching(Computer Science)</h3>
                    <p>I can teach various topics on Computer Science like Java, C++, DSA, HTML&CSS, Javascript, React and many more core topics of Computer Science to school and college students.</p>
                </div>
            </div>
        </div>
    </div>;
}
export default Services;