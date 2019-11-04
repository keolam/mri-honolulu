import React from 'react';
import Image from './../Data/imageDir';
import '../componentCSS/OurStaff.css';

const OurStaff = () => (
  <div>
    <section className="landing">
      <img src={ Image.staffHNL } id="hero" alt="honolulu"></img>
    </section>
    <section id="staff-box">
    <div className="staff-info">
      <img src={ Image.donBishop } className="staffPic" alt="company-president" style={{width: '20%'}}></img>
        <p className="staff-name">Don Bishop</p>
        <p className="staff-about">Account Executive Office Products Sales & IT Sales; Banking & Finance; Real Estate & Hotels</p>
        <p><a href="mailto:donbishop@mrihonolulu.com">donbishop@mrihonolulu.com</a></p>
    </div>
    <div className="staff-info">
      <img src={ Image.christinaCole } className="staffPic" alt="recruiter" style={{width: '24%'}}></img>
        <p className="staff-name">Christina Cole</p>
        <p className="staff-about">Healthcare, Pharmaceutical Sales, Medical Product and Device Sales.</p>
        <p><a href="mailto:chriscole@mrihonolulu.com">chriscole@mrihonolulu.com</a></p>
    </div>
    <div className="staff-info">
      <img src={ Image.kawikaMorse } className="staffPic" alt="project-coordinator" style={{width: '20%'}}></img>
      <p className="staff-name">Kawika Morse</p>
      <p className="staff-about">Project Coordinator & Internet Administration</p>
        <p><a href="mailto:kbm@mrihonolulu.com%20">kbm@mrihonolulu.com</a></p>
      </div>
    </section>
  </div>
);

export default OurStaff;