import React from "react";

function CircularSkills(props) {

    return <div className="circular-skills" data-aos="fade-up" data-aos-delay={props.delay}>
        <div className="circles-container">
            <div className="circular-progress" style={{ background: `conic-gradient(#EFDC2E ${props.skillvalue * 3.6}deg , #595a3b 0deg` }}>
            </div>
            <div className="progress-value-circular">{props.skillvalue}%</div>
        </div>
        <div className="skills-name">{props.skillname}</div>
    </div>
};

export default CircularSkills