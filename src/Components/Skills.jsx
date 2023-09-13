import React from "react";
import CircularSkills from "./Circular Skills";
import '../CSS Styling/Skills.css';
import LinearProgress from "./LinearProgress";
import Navbar from "./Navbar";
function Skills() {
    return <div className="skills-main-container" id="skills">
        {/* <Navbar/> */}
        <h1 className="heading">SKILLS</h1>
        <div className="underline-animated">
            <div className="animated-underline-box"></div>
        </div>
        <div className="skills-container-circular">
            <CircularSkills skillvalue="70" skillname="Front-End Development" delay="400" />
            <CircularSkills skillvalue="80" skillname="BackEnd Development" delay="600" />
            <CircularSkills skillvalue="85" skillname="Video Editing Development" delay="800" />
            <CircularSkills skillvalue="80" skillname="Data Structures & Algorithm" delay="1000" />

        </div>
        <div className="skills-container-linear">
            <LinearProgress skillvalue="70" skillname="Javascript" direction="fade-right" />
            <LinearProgress skillvalue="75" skillname="React JS" direction="fade-left" />
            <LinearProgress skillvalue="80" skillname="MongoDB" direction="fade-right" />
            <LinearProgress skillvalue="70" skillname="Nodejs" direction="fade-left" />
            <LinearProgress skillvalue="90" skillname="HTML CSS" direction="fade-right" />
            <LinearProgress skillvalue="85" skillname="Java" direction="fade-left" />
            <LinearProgress skillvalue="75" skillname="C" direction="fade-right" />
            <LinearProgress skillvalue="85" skillname="Adobe Premiere Pro" direction="fade-left" />
        </div>
    </div>
}
export default Skills;