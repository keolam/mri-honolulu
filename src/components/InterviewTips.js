import React from 'react';
import { Link } from 'react-router-dom';
import Image from './../Data/imageDir';
import Doc from './../Data/docDirectory';
import '../componentCSS/InterviewTips.css';

const InterviewTips = () => (
    <div>
        <div id="pic">
            <img src={ Image.interview } alt="interview" style={{width: '100%'}}></img>
        </div>

        <h1>Interviewing Tips</h1>
        <div id="paragraph">
            The job interview(s) is the most crucial aspect of the hiring process, and the
            following advice was developed from years of MRI Network recruiter experience
            working with countless candidates and innumerable interviews.  Prepare
            for your next job interview by taking advantage of this extensive experience
            and read these tipsheets online or print them out for future reference.
        </div>

        <div className="smalltxt">
        <div>
            Interviewing Basics
            The ins-and-outs of professional interviewing, including what not to say during the interview.
            <p>
            <a href={Doc.interviewBasics} download>Download Here</a>
            <a href="basics.pdf" target="_blank">&nbsp;</a>
            </p>
        </div>

        <div>
            Illegal Interview Questions: What You Should Know
            Learn how to handle yourself when the interviewer takes a wrong turn.
            <span className="smalltxt">
            <p>
            <a href={Doc.illegal} download>Download Here</a>
            <a href="illegal.pdf" target="_blank">&nbsp;</a>
            </p>
            </span>
        </div>
        <div> 
            Writing Thank You Letters
            The interview doesn't end when you walk out the door. A well-written follow-up letter can help you close the deal.
            <span className="smalltxt">
            <p>
            <a href={Doc.thankyou} download>Download Here</a>
            <a href="letters.pdf" target="_blank">&nbsp;</a>
            </p>
            </span>
        </div>
        </div>
        <div className="back-to">
            <Link to='/CandidateResources' className="can-rec">
                Back to Candidate Resources
            </Link>
        </div>
    </div>
);

export default InterviewTips;