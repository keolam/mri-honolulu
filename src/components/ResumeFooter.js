import React from 'react';
import { Link } from 'react-router-dom';
import '../componentCSS/ResumeFooter.css'

const ResumeFooter = (props) => {

    let linkArray = ["Resume Basics", "Contact Info", "Objective", "Skills", "Experience", "Education", "Finish", "Tips"];

    let linkNames = linkArray.filter(resLink => {
        return resLink !== props.name;
    });

    return (
        <div id="bottom-links">
            {linkNames.map((linkName) => (
                <Link to={linkName} className="b-link">
                    {linkName}
                </Link>
            ))}
        </div>
    )
}

export default ResumeFooter;
