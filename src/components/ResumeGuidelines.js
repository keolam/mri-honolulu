import React from 'react';
import { Link } from 'react-router-dom';

const ResumeGuidelines = () => (
    <div>
        <h1>Resume Guidelines</h1>
        <div id="candidate-footer">
            <Link to='/CandidateResources' className="can-rec">
                Back to Candidate Resources
            </Link>
        </div>
    </div>
);

export default ResumeGuidelines;