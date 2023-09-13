import React from "react";
import '../CSS Styling/Timeline.css';
function Timeline(props) {
    return <div className="timeline">
        <div className="timeline-year"><p>{props.year}</p></div>
        <div className="timeline-year-details">
            <span className="timeline-shape-container">
                <div className="rounded-circle"></div>
                <div className="line"></div>
            </span>
            <h3>{props.education}</h3>
            <h4>{props.institute_name}</h4>
            <p className="timeline-details-para">{props.details}</p>
        </div>
    </div>

}

export default Timeline;