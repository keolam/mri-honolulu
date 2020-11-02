import React from 'react';
import { Link } from 'react-router-dom';
import Image from './../Data/imageDir';
import Doc from './../Data/docDirectory';
import '../componentCSS/AlternativeResume.css'

const TraditionalFormats = () => (
    <section>
        <img src={Image.traditional} id="hero" alt="resume" data-aos="fade-in" data-aos-delay="300"></img>
        <h1>Traditional Resume Formats</h1>
        <div id="main-column">
            <div className="basic-paragraph">

                <p className="top-paragraph">
                    The following examples are available as Rich Text Files.
                    Feel free to download and use these examples as a layout template for creating your own resume.
        </p>
                <div className="guideline">
                    <p>
                        <strong>The Analytical Resume</strong> - This format uses skill fields as headings and also ignores historical sequence. If you have diverse experience or you are trying to change careers, use this style.
                        </p>
                    <a href={Doc.analytical} download>Analytical Resume Sample</a>
                </div>
                <div className="guideline">
                    <p>
                        <strong>The Chronological Resume</strong> - This type is set up in reverse chronological order, most recent first. This style is best suited for those individuals with significant experience in their field.
                        </p>
                    <a href={Doc.chronological} download>Chronological Resume Sample</a>


                </div>
                <div className="guideline">
                    <p>
                        <strong>The Creative Resume</strong> - Use the creative format only if you are working in a creative occupation, such as graphic design. Even then, use this style with discretion.
                        </p>
                    <a href={Doc.creative} download>Creative Resume Sample</a>
                </div>
            </div>
            <div className="return-link">
                <Link to='/ResumeGuidelines'>« Back to Resume Guidelines</Link>
            </div>
        </div>
    </section>
)

export default TraditionalFormats;