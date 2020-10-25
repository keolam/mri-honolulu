import React from 'react';
import { Link } from 'react-router-dom';
import Image from './../Data/imageDir';
import '../componentCSS/ResumeGuide.css'

const ResumeBasics = () => (
    <div id="res-basics">
        <section>
            <img src={ Image.resumeBasic } id="hero" alt="resume" data-aos="fade-in" data-aos-delay="300"></img>
            <h1>Resume Basics</h1>
            <div id="main-column">
                <div className="main-row" data-aos="fade-in" data-aos-delay="300">
                    <p className="basic-paragraph">
                        A good resume is more than a list of jobs and duties performed. 
                        Generally speaking, a good resume shows employers, as well as recruiters, 
                        that you can go beyond what's required of you to make a difference in the organization.
                    </p>
                </div>
            </div>
            <div id="main-column">
                <div className="main-row" data-aos="fade-in" data-aos-delay="300">
                    <p className="basic-paragraph">
                        So, how do you create a resume that gets noticed? 
                        Let's start with the basics: 
                    <br/>  
                        Contact Information, Objective, Summary of Skills, Professional Experience, 
                        Education, Finishing Up, and finally, some added tips. 
                        Read it right here online or download and print it via the links below.
                </p>
                </div>
            </div>
        </section>
        <div id="bottom-links">
            <Link to='/Landing' className="b-link">
                Contact Information
            </Link> | 
            <Link to='/Landing' className="b-link">
                Objective
            </Link> | 
            <Link to='/Landing' className="b-link">
                Skills
            </Link> | 
            <Link to='/Landing' className="b-link">
                Experience
            </Link> | 
            <Link to='/Landing' className="b-link">
                Education
            </Link>| 
            <Link to='/Landing' className="b-link">
                Finish
            </Link> | 
            <Link to='/Landing' className="b-link">
                Tips
            </Link>
        </div>
    </div>
)

export default ResumeBasics;