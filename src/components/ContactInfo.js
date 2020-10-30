import React from 'react';
import Image from './../Data/imageDir';
import ResumeFooter from './ResumeFooter';
import '../componentCSS/ResumeGuide.css'

const ContactInfo = () => (
    <>
        <img src={Image.resumeBasic} id="hero" alt="resume" data-aos="fade-in" data-aos-delay="300"></img>
        <div>
            <h1 data-aos="fade-in" data-aos-delay="300"> Contact Information</h1>
            <p id="contact-paragraph" data-aos="fade-in" data-aos-delay="300">
                Unless your situation dictates it (and it most likely never
                will), you should never volunteer personal information such as age, ethnicity,
                religion, marital status and physical attributes on your resume. Put your
                current phone and/or fax number(s), your postal address, and your email address
                at the top of your resume, and leave it at that. For example:
            </p>
            <br />
            <span id="address" data-aos="fade-in" data-aos-delay="300">
                <div><strong>GORDON C. PARKS</strong><br />
                    gcparks@anywhere.com<br />
                    2100 W. James Avenue, Suite B-3 • Cleveland, Ohio 44000<br />
                    Tel: (216) 555-0000 • Fax: (216) 555-0001 • Cellular: (216) 555-0002
                </div>
            </span>
            <ResumeFooter name="Contact Info" data-aos="fade-in" data-aos-delay="300" />
        </div>
    </>
)

export default ContactInfo;