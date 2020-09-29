import React from 'react';
import { Link } from 'react-router-dom';
import Image from './../Data/imageDir';
import '../componentCSS/ResumeGuide.css'

const ResumeGuidelines = () => (
    <div>
        <img src={ Image.resume } id="hero" alt="resume" data-aos="fade-in" data-aos-delay="300"></img>
        <h1>Resume Guidelines</h1>
        <div id="main-column">
            <div className="main-row" data-aos="fade-left" data-aos-delay="300">
                <div className="guideline">
                    <p>Follow a few simple rules to create a polished, professional-looking resume that demands attention.</p>
                    <Link to='/ResumeBasics'>Resume Basics</Link>
                </div>
            </div>
            <div className="main-row" data-aos="fade-left" data-aos-delay="300">
                <div className="guideline">
                    <p>View traditional Resume samples including Chronological, Analytical and Creative formats to help you organize your own.</p>
                    <Link to='/TraditionalFormats'>Traditional Resume Formats</Link>
                </div>
            </div>
            <div className="main-row" data-aos="fade-left" data-aos-delay="300">
                <div className="guideline">
                    <p>View samples of Web-Ready, Scannable and Project Focused Resumes.</p>
                    <Link to='/AlternativeFormats'>Alternative Resume Formats</Link>
                </div>
            </div>
            <div className="back-to">
                <Link to='/CandidateResources' id="can-rec">
                    <p>Back to Candidate Resources</p>
                </Link>       
            </div>
        </div>
    </div>
);

export default ResumeGuidelines;