import React from "react";
import '../CSS Styling/Resume.css';
import Timeline from "./Timeline";
import Navbar from "./Navbar";
function Resume() {
    return <div className="resume-container" id="resume">
        {/* <Navbar/> */}
        <h1 className="heading">MY RESUME</h1>
        <div className="underline-animated">
            <div className="animated-underline-box"></div>
        </div>
        <div className="timeline-container">
            <div className="education-timeline" data-aos="fade-up"
                data-aos-duration="1000">
                <div className="timeline-heading">Education Qualification</div>
                <Timeline year="2010-2018" education="Secondary Education" institute_name="Dunlop Engish Medium School" details="I studied here from class III - X under ICSE Board. I passed my ISCE with 94% marks." />
                <Timeline year="2018-2020" education="High-Secondary Education" institute_name="Tribeni Tissues Vidyapith" details="I completed my class 11 and class 12 with science background from Tribeni Tissues Vidyapith. I passed my class 12 boards with 92% marks." />
                <Timeline year="2020-2023" education="Graduation" institute_name="Scottish Church College" details="I did BSC Computer Science (Hons.) with an average CGPA of 8.5 with Maths and Physics as my minor subjects under the University Calcutta" />
            </div>
            <div className="job-timeline" data-aos="fade-up"
                data-aos-duration="1000">
                <div className="timeline-heading">Work Experience</div>
                <Timeline year="2020-2021" education="Technical Content Writing" institute_name="GeeksforGeeks" details="I wrote over 50 technical artilces on their website on different current technologies like SASS, CSS, Bootstrap and School Physics, Chemistry and Computer Science and many more." />
                <Timeline year="2021-2021" education="Video Editor Intern" institute_name="My Ways" details="I worked as an Video Editor Intern in My Ways Pvt Ltd. I edited videos for their Official Youtube Channel and also edited their promo video in Dubai Expo 2021 and for their Tech events." />
                <Timeline year="2020-2023" education="Freelancing" institute_name="Fiver & 2SigmaSchool" details="I did freelance work on video editing, coding video editing on Java, Scratch for 2Sigma School and also worked on their Java course evaluation modules." />
            </div>
        </div>
    </div>
}
export default Resume;