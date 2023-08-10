import React from "react";

function LinearProgress(props) {
    return <div className="linear-skills-container" data-aos={props.direction}
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
        {props.skillname} - {props.skillvalue}%
        <div className="linear-progress-container" style={{ width: `${0.4 * props.skillvalue}vw` }}>
        </div>
    </div>
}
export default LinearProgress;