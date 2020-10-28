import React from 'react';
import Image from './../Data/imageDir';
import '../componentCSS/ResumeGuide.css'

const Objective = () => (
    <>
        <img src={Image.resumeBasic} id="hero" alt="resume" data-aos="fade-in" data-aos-delay="300"></img>
        <div>
            <h1>Objective</h1>

            <p className="objective">
                Your objective statement should show employers that you know what you want and you know how to get it.
                This doesn't mean your objective should read something like, "I want a high-paying job in pharmaceutical
                sales, and I'm willing to do anything to get it!" (Even though that may be how you're feeling.)
                Rather, your objective should be targeted, professional, and free of personal pronouns (e.g., "I," "me")
                and other flowery details. You may even want to consider using a tagline instead of a complete sentence,
                as in the following example:
            </p>
            <p className="objective"><strong>Objective: </strong> &nbsp; Pharmaceutical sales position capitalizing on 15 years'
                experience in retail management and hospital administration.
            </p>
            <p className="objective">Of course, your objective can be longer or shorter than this example.
                Ultimately it depends on your situation, your level of experience,
                and your desired position.
            </p>
        </div>
    </>
)

export default Objective;