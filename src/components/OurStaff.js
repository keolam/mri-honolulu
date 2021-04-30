import React from 'react';
import Image from './../Data/imageDir';
import BottomNav from './BottomNav';
import '../componentCSS/OurStaff.css';

const OurStaff = () => (

  <>
    <section className="landing">
      <img src={Image.staffHNL} id="hero" alt="honolulu" data-aos="fade-in" data-aos-delay="300"></img>
    </section>

    <section id="staff-box">
      <div className="staff-info">
        <img src={Image.donBishop} id="donPic" alt="company-president" style={{ width: '50%', height: '50%' }}></img>
        <div className="right-col">
          <p className="staff-name">Don Bishop</p>
          <p className="staff-pos">Account Executive Office Products Sales & IT Sales; Banking & Finance; Real Estate & Hotels</p>
          <p className="staff-about">Don has over 35 years of recruiting in the Hawaii marketplace and has been an MRINetwork associate for over 17 years. He has extensive experience in finding and recruiting the top sales talent in the office products and information technology industries.</p>
          <p><a href="mailto:donbishop@mrihonolulu.com">donbishop@mrihonolulu.com</a></p>
        </div>
      </div>
      <div className="staff-info" data-aos="fade-left">
        <img src={Image.christinaCole} id="chrisPic" alt="recruiter" style={{ width: '14%', height: '10%' }}></img>
        <div className="right-col">
          <p className="staff-name">Christina Cole</p>
          <p className="staff-pos">Healthcare, Pharmaceutical Sales, Medical Product and Device Sales.</p>
          <p className="staff-about">Christina's specialty includes Pharmaceutical and Medical products and devices, consumer goods, food service and human resources. She is a preferred recruiter for several national companies, and an award winner for productivity.</p>
          <p><a href="mailto:chriscole@mrihonolulu.com">chriscole@mrihonolulu.com</a></p>
        </div>
      </div>
      <div className="staff-info" data-aos="fade-right">
        <img src={Image.kalae} id="donPic" alt="project-coordinator" style={{ width: '70%', height: '50%' }}></img>
        <div className="right-col">
          <p className="staff-name">Kalae Morse</p>
          <p className="staff-pos">Account Excutive</p>
          <p className="staff-about">Kalae specializes in the Entertainment and Sports Marketing industries and provides assistance to our executives with their search assignments and projects.</p>
          <p><a href="mailto:kbm@mrihonolulu.com%20">kbm@mrihonolulu.com</a></p>
        </div>
      </div>
    </section>

    <BottomNav name="Our Staff" />
  </>

);

export default OurStaff;