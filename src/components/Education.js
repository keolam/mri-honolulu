import React from 'react';
import Image from './../Data/imageDir';
import '../componentCSS/ResumeGuide.css'

const Education = () => (
    <>
        <img src={Image.resumeBasic} id="hero" alt="resume" data-aos="fade-in" data-aos-delay="300"></img>
        <div>
            <h1>Education</h1>

            <p className="objective">
                The education area of your resume should include the institution's name and location,
                along with your degree and the year you obtained it.</p>
            <br />
            <p className="objective">
                Beyond that, you can include educational honors, seminars and certifications,
                and list achievements such as projects, awards, and grade-point averages.
                A GPA of 3.0 or above is worth mentioning.
            </p>
        </div>
    </>
)

export default Education;