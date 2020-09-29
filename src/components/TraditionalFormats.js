import React from 'react';
import { Link } from 'react-router-dom';
import Image from './../Data/imageDir';
import '../componentCSS/ResumeGuide.css'

const TraditionalFormats = () => (
    <section>
        <img src={ Image.traditional } id="hero" alt="resume" data-aos="fade-in" data-aos-delay="300"></img>
        <h1>Traditional Resume Formats</h1>
        <div id="main-column">
            <div className="basic-paragraph">
            
        <p>
            The following examples are available as Rich Text Files. 
            Feel free to download and use these examples as a layout template for creating your own resume.
        </p>
        <div className="guideline">
        <p>
            The Analytical Resume - This format uses skill fields as headings and also ignores historical sequence. If you have diverse experience or you are trying to change careers, use this style.
            Rich Text File
        </p>
        </div>
        <div className="guideline">
        <p>
            The Chronological Resume - This type is set up in reverse chronological order, most recent first. This style is best suited for those individuals with significant experience in their field.
            Rich Text File
        </p>
        </div>
        <div className="guideline">
        <p>
            The Creative Resume - Use the creative format only if you are working in a creative occupation, such as graphic design. Even then, use this style with discretion.
            Rich Text File
        </p>
        </div>
        </div>
        </div>
</section>
)

export default TraditionalFormats;