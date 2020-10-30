import React from 'react';
import Image from './../Data/imageDir';
import ResumeFooter from './ResumeFooter';
import '../componentCSS/ResumeGuide.css'

const Skills = () => (
    <>
        <img src={Image.resumeBasic} id="hero" alt="resume" data-aos="fade-in" data-aos-delay="300"></img>
        <div>
            <h1>Summary of Skills</h1>

            <p className="objective">
                Use the summary statement to emphasize the most important qualities, achievements and
                abilities you have to offer an employer. Include professional characteristics that could help
                you later during the interview; for example, "team-oriented," "skilled at problem-solving,"
                "committed to excellence." Then, during the interview, be prepared with anecdotes so you
                can elaborate on each of these statements. Here's an example:
            </p>
            <p className="objective"><strong>Summary of Skills: </strong> &nbsp; Sales professional with proven background in retail management
                and hospital administration. Design, coordinate and enhance sales and marketing activities and relationships
                to identify business customers. Effective communicator, able to develop comprehensive networks for
                continuing organization visibility and sales revenues. Desire career growth based on performance
                and accomplishments.
            </p>
            <>
            </>
        </div>
        <ResumeFooter name="Skills" />
    </>
)

export default Skills;