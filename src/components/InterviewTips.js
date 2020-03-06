import React from 'react';
import { Link } from 'react-router-dom';
import Image from './../Data/imageDir';
import '../componentCSS/InterviewTips.css';

const InterviewTips = () => (
    <div>
        <div id="pic">
              <img src={ Image.interview } alt="interview" style={{width: '100%'}}></img>
          </div>

        <h1>Interviewing Tips</h1>
        <p id="paragraph">
            The job interview(s) is the most crucial aspect of the hiring process, and the
            following advice was developed from years of MRI Network recruiter experience
            working with countless candidates and innumerable interviews.  Prepare
            for your next job interview by taking advantage of this extensive experience
            and read these tipsheets online or print them out for future reference.
        </p>
        <div id="candidate-footer">
            <Link to='/CandidateResources' className="can-rec">
                Back to Candidate Resources
            </Link>
        </div>
    </div>
);

export default InterviewTips;