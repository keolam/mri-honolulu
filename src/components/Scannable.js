import React from 'react';
import { Link } from 'react-router-dom';
import Image from './../Data/imageDir';
import Doc from './../Data/docDirectory';
import '../componentCSS/AlternativeResume.css'

const Scannable = () => (
    <section>
        <img src={Image.alternative} id="hero" alt="resume" data-aos="fade-in" data-aos-delay="300"></img>
        <h1> The Scannable Resume</h1>

        <div id="main-column">

            <p className="top-paragraph" data-aos="fade-in" data-aos-delay="300">Today, many mid- to large- sized companies are requiring candidates to submit multiple resumes
                for the company's files. Your online resume might be what gets you noticed, but your traditional
                paper resume will be what the HR department files. To make this process more efficient, companies
                have implemented document scanners, or Optical Character Recognition (OCR) systems, to quickly
                scan resumes into a master database.
            </p>
            <p>
                <h2 data-aos="fade-in" data-aos-delay="300">If you're ready to make your resume scannable, we suggest the following pointers:</h2>
            </p>

            <h2 data-aos="fade-in" data-aos-delay="300">Step 1: Use Strong Keywords to Get Attention</h2>
            <p className="support-paragraph" data-aos="fade-in" data-aos-delay="300">Keywords are not only easy for OCRs to read; they're crucial to getting a recruiter's attention.
                Keywords increase your visibility in a database search, so it's important that you include the
                right keywords in your scannable resume.
                </p>

            <p className="support-paragraph" data-aos="fade-in" data-aos-delay="300">
                What kind of keywords do you need? You can start by focusing on nouns, rather than verbs. For example, "Webmaster" is clearer than, “In charge of maintenance, design and security of Web site." Picture your resume as a huge list of keywords. Which ones will get the most attention in a search?
            </p>

            <h2 data-aos="fade-in" data-aos-delay="300">Step 2: Keep it Simple, Make it Scannable</h2>

            <p className="support-paragraph" data-aos="fade-in" data-aos-delay="300">Some OCRs can read special formatting (e.g., italics, boldface type), but in general the most
                scannable resumes are also the simplest ones. Follow these steps and you should have no trouble
                making it through the OCR:
            </p>
            <ul className="support-paragraph" data-aos="fade-in" data-aos-delay="300">
                <li> Use a single-column format (OCRs read from left to right).</li>

                <li>Use a common sans-serif font style such as Arial or Helvetica.</li>

                <li>Keep your text size between 10 and 14 points.</li>

                <li>Include your name at the top of every page.</li>

                <li>Put your name and your contact information on separate lines.</li>

                <li>Use a space to separate slashes (e.g., "1 / 00") -- most scanning programs have difficulty interpreting characters that touch one another.</li>

                <li>Use boldface type or capital letters for headings, and make sure no characters are touching.</li>

                <li>Use discretion with italics, horizontal rules and underlines - not all scanning programs can read these decorative elements. However, if you decide to use these elements to highlight your text, make sure no characters are touching.</li>

                <li>Use labels to set off distinct areas of your resume. Some examples are "Name:", "Email:", "Fax:", "Experience:", etc.</li>

                <li>Remove ampersands, hollow bullet points, foreign characters, currency symbols or any other unusual graphics that the scanning program might have difficulty reading.</li>

                <li>Always spell check.</li>

                <li>Print your resume (a laser printer is best) on plain white or extremely light-colored paper, and choose paper that is free of speckles and other decorative elements.</li>

                <li>Do not fold or staple your resume; use a large enough envelope to accommodate your paper size.</li>

                <li>If you prefer to email your resume, save it as a Plain Text document, and attach the text file to your email message/cover letter.</li>
            </ul>
            <br />
            <br />
            <a href={Doc.scannable} download>Example of a Scannable Resume</a>
            <br />
            <br />
            <div className="return-link">
                <Link to='/AlternativeFormats'>Back to Alternative Resume Formats</Link>
            </div>
        </div>
    </section>
)

export default Scannable;