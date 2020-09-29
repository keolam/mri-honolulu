import React from 'react';
import { Link } from 'react-router-dom';
import Image from './../Data/imageDir';
import '../componentCSS/ResumeGuide.css'

const TraditionalFormats = () => (
    <section>
        <img src={ Image.alternative } id="hero" alt="resume" data-aos="fade-in" data-aos-delay="300"></img>
        <h1>Alternative Resume Formats</h1>
        <div id="main-column">
            <div className="basic-paragraph">
                <p >
                    The following examples are available as Rich Text Files.  Feel free to download and use these examples as a layout template for creating your own resume.
                </p>
                <div className="guideline">
                    <p>The Web-Ready Resume</p>
                    <p>
                        If you're going to post your resume to a job site, you’ll want to create a document that's both useful and user-friendly.
                    </p>
                </div>
                <div className="guideline">
                    <p>The Scannable Resume</p>
                    <p>
                        You can easily convert your fancy, formatted resume into a simple, scannable document that's still attractive.
                    </p>
                </div>
                <div className="guideline">
                    <p>The Project-Focused Resume</p>
                    <p>
                        Use the project-focused resume to highlight not only your skills, but your ability to take an idea from concept to execution.
                    </p>
                </div>
            </div>
        </div>
    </section>
)

export default TraditionalFormats;