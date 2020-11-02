import React from 'react';
import { Link } from 'react-router-dom';
import Image from './../Data/imageDir';
import Doc from './../Data/docDirectory';
import '../componentCSS/AlternativeResume.css'

const WebReady = () => (
    <section>
        <img src={Image.alternative} id="hero" alt="resume" data-aos="fade-in" data-aos-delay="300"></img>
        <h1> The Web Ready Resume</h1>

        <div id="main-column">

            <p className="top-paragraph">If you're going to post your resume on the internet, you'll want to have a resume that's both useful
                and user-friendly. "Webified Resumes" can appear in different formats, but the following examples are
                among the easiest to create:
            </p>

            <h2>The Keyword Resume</h2>
            <p className="support-paragraph">Keywords are words or phrases (e.g., skills, experience, industries, jargon) that are utilized during
            Web-based searches. Keywords can be used to lure recruiters and companies to your resume—although this
            doesn't mean you should include every imaginable keyword in your resume. Instead, develop your resume
            in a traditional format, and then extract choice keywords by which a recruiter may search. Not only
            should those words demonstrate your skills and experience; they should also reflect the type of job
            you're trying to find.
            </p>

            <a href={Doc.analytical} download>Example of a Keyword Resume</a>


            <h2>The ASCII Plain Text Resume</h2>
            <div className="support-paragraph">
                <p>What type of document is best for posting a resume on a job board? We recommend using ASCII plain
                    text for cutting and pasting a resume into websites and job boards. Before saving a document in ASCII
                    Plain Text format:
            </p>
                <ul>
                    <li>Remove any formatting in your original word-processing document.</li>
                    <li>Do not use bold, italic, graphics or bullet points.</li>
                    <li>Distinguish categories such as "education" and "experience" with capital letters and double spacing.</li>
                    <li>We recommend that you use a bullet-point format for readability, but use asterisks or dashes instead of bullets.</li>
                    <li>Set your margins at seven inches or less. A maximum of 80 characters per line is recommended to avoid long lines of text across the width of the page.</li>
                    <li>Use separate lines for name, address and email address. This information may blend together and be difficult for the reader to comprehend.</li>
                    <li>Use a separate line for job title, company name, location and employment history.</li>
                </ul>
            </div>

            <a href={Doc.analytical} download>Example of an ASCII Plain-Text Resume</a>

        </div>
        <Link to='/AlternativeFormats'>« Back to Alternative Resume Formats</Link>
    </section>
)

export default WebReady;