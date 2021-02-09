import React from 'react';
import { Link } from 'react-router-dom';
import '../componentCSS/ResumeFooter.css'

const ResumeFooter = (props) => {

    let linkArray = ["Resume Basics", "Contact Info", "Objective", "Skills", "Experience", "Education", "Finish", "Tips"];

    let linkNames = linkArray.filter(resLink => {
        return resLink !== props.name;
    });

    const removeSpace = (string) => {
       /* if (string.includes(' ')) {*/
            let wordArr = string.split('');
            wordArr.splice(wordArr.indexOf(' '), 1);
            return wordArr.join('');
     //   }
    };

    return (
        <div id="bottom-links">
            {linkNames.map((linkName) => (
                <Link to={linkName.includes(' ') ? removeSpace(linkName) : linkName} className="b-link" key={linkName.toLowerCase()}>
                    {linkName}
                </Link>
            ))}
        </div>
    )
}

export default ResumeFooter;
