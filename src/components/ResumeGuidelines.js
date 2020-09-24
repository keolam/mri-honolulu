import React from 'react';
import { Link } from 'react-router-dom';

const ResumeGuidelines = () => (
    <div>
        <h1>Resume Guidelines</h1>
        <div>
            <Link to='/blablabla'>Resume Basics</Link>
            <p>Follow a few simple rules to create a polished, professional-looking resume that demands attention.</p>

            <Link to='/blablabla'>Traditional Resume Formats</Link>
            <p>View traditional Resume samples including Chronological, Analytical and Creative formats to help you organize your own.</p>

            <Link to='/blablabla'>Alternative Resume Formats</Link>
            <p>View samples of Web-Ready, Scannable and Project Focused Resumes.</p>
        </div>
        <div className="back-to">
            <Link to='/CandidateResources' className="can-rec">
                Back to Candidate Resources
            </Link>
        </div>
    </div>
);

export default ResumeGuidelines;