import React from 'react';
import Image from './../Data/imageDir';
import '../componentCSS/ResumeGuide.css'

const Tips = () => (
    <>
        <img src={Image.resumeBasic} id="hero" alt="resume" data-aos="fade-in" data-aos-delay="300"></img>
        <div>
            <h1>Tips from MRI Network Recruiters</h1>

            <p className="objective">
                MRI's recruiters have highlighted 12 of the career accomplishments that most interest employers.
                It's possible that you've accomplished some of these in your current job—think of how you might
                include them on your resume. Approach each one from the viewpoint of a recruiter: How can this
                past accomplishment benefit a potential employer?
            </p>
            <div id="bullet-lists">
                <div id="column1">
                    <ul>
                        <li>Increased revenues</li>
                        <li>Saved money</li>
                        <li>Increased efficiency</li>
                        <li>Cut overhead</li>
                        <li>Increased sales</li>
                        <li>Improved workplace safety</li>
                    </ul>
                </div>
                <div id="column2">
                    <ul>
                        <li>Purchasing accomplishments</li>
                        <li>New products/new lines</li>
                        <li>Improved record-keeping process</li>
                        <li>Increased productivity</li>
                        <li>Successful advertising campaign</li>
                        <li>Effective budgeting</li>
                    </ul>
                </div>
            </div>

        </div>
    </>
)

export default Tips;