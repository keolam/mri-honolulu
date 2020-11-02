import React from 'react';
import { Link } from 'react-router-dom';
import Image from './../Data/imageDir';
import Doc from './../Data/docDirectory';
import '../componentCSS/AlternativeResume.css'

const ProjectFocused = () => (
    <section>
        <img src={Image.alternative} id="hero" alt="resume" data-aos="fade-in" data-aos-delay="300"></img>
        <h1> The Project-Focused Resume</h1>

        <div id="main-column">

            <p>The project-focused resume highlights not only your skills, but your ability to take an idea
                from concept to execution. It demonstrates your leadership skills, as well as your project-management
                and organizational skills, to a potential employer.
            </p>

            <h2>Some things to keep in mind as you create a project-focused resume:</h2>
            <p>There are no real guidelines for this type of resume. It's a new concept, so few resume-writing gurus
                have given their blessing or their disapproval, much less their requirements for format, layout or
                suggested wording. Be a trailblazer. Give it a try, and see if you get results. You won't be hunted
                down by the resume police and forced to use the standard chronological format.
            </p>

            <p>
                If your profession warrants it, you might want to include a section for technical skills. You make the call.
                If you find that you're not getting hits (views from recruiters), you might want to spend some time refining
                your keyword and skills lists. These are the things that recruiters use to conduct a database search. Make
                sure your lists are clear and complete.
            </p>

            <p>
                <a href={Doc.analytical} download>Example of a Project-Focused Resume</a> This sample shows just two projects
                for two different jobs. You might have more projects, as well as more jobs, to include on your resume.
                Do what works for you.
            </p>

        </div>
        <Link to='/AlternativeFormats'>« Back to Alternative Resume Formats</Link>

    </section>
)

export default ProjectFocused;