import React from 'react';
import Image from './../Data/imageDir';

const Submit = () => (
        <div>
            <img src={ Image.submitResume } alt="keyboard" style={{width: '100%'}}></img>
            <section className="main">
            <div id="title">
        <p>Submit Your Resume
            Confidentiality is an integral part of our service, and maintaining yours is as important to us as it is to you. Be assured that if you submit your resume to us to help you find career opportunities, we will only submit your resume to a client company with your express permission first.
    
            If you are interested in any of our job opportunities, or interested in any other services we can provide for you, please submit your resume via our job listings page, where you can register and upload your resume with password protection to protect your confidentiality.
    
            You can also email us your resume as an MS Word, RTF or PDF attachment, or you can also fax or submit your resume via postal service.
        </p>
        </div>
        </section>
        </div>
);

export default Submit;