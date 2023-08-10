import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import '../CSS Styling/Introduction.css'
import ProfilePic from '../pictures/profile_pic_sample.png';
import Github from '../pictures/github.png';
import LinkedIn from '../pictures/linkedIN.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Introduction() {
    return <>
        <div className="introduction-container" id="intro">
            <img className="profile-pic-container" src={ProfilePic} />
            <h1 className="myself-intro-container">Hi, I am <nbsp />
                <span className="changing-text"><b>
                    <Typewriter
                        words={['Full Stack Developer', 'Video Editor', 'Saikat Mohanta']}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={2000}
                        cursorColor="#EFDC2E"
                    />
                </b></span></h1>
            <div className="skills-brief">I am a full Stack developer.I have knowledge on MERN Stack, Java , C and Python.<br />
                I have also edited various kinds of videos for many different clients.
            </div>
            <div className="social-media-handles">
                <a href="https://github.com/coderacademics" target="blank" style={{ textDecoration: "none", color: "#fff" }}><GitHubIcon className="media-handles-icons" /></a>
                <a href="https://www.linkedin.com/in/saikat-mohanta43434" target="blank" style={{ textDecoration: "none", color: "#fff" }}><LinkedInIcon className="media-handles-icons" /></a>
            </div>
        </div>
    </>;
}
export default Introduction;