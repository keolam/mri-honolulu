import React, { /*Component*/ } from 'react';
import Image from './../Data/imageDir';
import '../componentCSS/JobListings.css'

const JobListings = () => ( 
    <div>
        <img src={ Image.office } id="office" alt="workspace" style={{width: '100%'}} data-aos="fade-in" data-aos-delay="300"></img>
        <section className="main">
            <div id="title" data-aos="fade-left">
                <p>You don't need to register to view our job listings.</p>

                <p>Registration is for those who wish to submit your resume into our system with password protection for your confidential information. </p>

                <p>Click on the Search button at the bottom of this page to view our current Job Listings.</p>
            </div>
          <iframe id="frame" title="job-board" src="https://www.pcrecruiter.net/pcrbin/regmenu.aspx?uid=sc%20honolulu.schonolulu" width="100%" height="500" frameBorder="0" data-aos="fade-right"></iframe>
        </section>
    </div>
);

export default JobListings;