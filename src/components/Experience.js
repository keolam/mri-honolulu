import React from 'react';
import Image from './../Data/imageDir';
import '../componentCSS/ResumeGuide.css'

const Experience = () => (
    <>
        <img src={Image.resumeBasic} id="hero" alt="resume" data-aos="fade-in" data-aos-delay="300"></img>
        <div>
            <h1>Professional Experience</h1>

            <p className="objective">
                Go back 10-15 years, and list every position you've held in reverse chronological order.
                Even though age discrimination is illegal, many candidates with substantial experience
                worry about falling victim to it. So, if you've been in the field for more than 15 years,
                you can add a section titled "Prior Relevant Experience" and just refer to your additional
                important jobs without mentioning specific dates. If you've held multiple positions within
                the same company, list every position—you'll want to show that you've progressed. Finally,
                concentrate on the description of each position—the meat and potatoes of this section—to
                show that you've gotten results and solved problems within the organization. For example:
            </p>
            <p className="objective">
                <div className="bold-start"><span className="bolden">Feb 2018 - Present</span><span> &nbsp; Western
                    Health Systems, Cleveland, Ohio. Hospital Marketing
                    Representative Represent major expanding medical diagnostic reference laboratories testing
                    program to hospitals and health systems in the sales of services and information systems.
                    Create marketing and strategic selling plans. Establish network within hospital marketplace
                    for upstart division. Comprehensive knowledge of managed care and physician group, and
                    clinical trials market.</span>
                </div>
            </p>
        </div>
    </>
)

export default Experience;