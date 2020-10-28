import React from 'react';
import Image from './../Data/imageDir';
import '../componentCSS/ResumeGuide.css'

const Finish = () => (
    <>
        <img src={Image.resumeBasic} id="hero" alt="resume" data-aos="fade-in" data-aos-delay="300"></img>
        <div>
            <h1>Finishing Up</h1>

            <p className="objective">
                After you've finished the professional experience and education areas of your resume,
                you can add additional sections for additional pertinent information, such as professional
                honors, awards and affiliations.
            </p>
            <br />
            <p className="objective">
                While you might need to provide your recruiter with professional references, it's not necessary
                to include these on your resume—after all, if you're in the middle of a career search, it's pretty
                clear that you've developed some professional relationships along the way. However, if you do add
                a references section, make sure it says more than "References available upon request." Also, check
                with your references beforehand to make sure you can include them on your resume. You don't want
                anyone to be surprised when the recruiter calls.
            </p>
            <br />
            <p className="objective">
                You may also wish to include professional skills, such as languages spoken and proficiencies with
                computer software or hardware, in this section. Other possibilities include professional training,
                appointments and licenses. However, you should never include hobbies (e.g., "I like to read") or
                list personal interests (e.g., "music, books, art") anywhere on your resume.
            </p>
        </div>
    </>
)

export default Finish;