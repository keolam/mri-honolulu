import React from 'react';
import Image from '../Data/imageDir';
import '../componentCSS/Footer.css';

const Footer = () => (
    <div id="contact" data-aos="fade-up" data-aos-offset="180">
        <span id="mail-icon">
            <a href="mailto: mail@mrihonolulu.com"><img src={Image.mailIcon} alt="email"></img></a>
        </span>
        <span id="phone-icon">
            <img src={Image.phone} alt="phone"></img>
        </span>
        <span id="phone-number"><a href="tel:+18085333282">808.533.3282</a></span>
        <span id="toll-free"><a href="tel:+18008790448">1.800.879.0448</a></span>
        <span id="location-icon">
            <img src={Image.location} alt="location"></img>
        </span>
        <span id="street-address">850 Richards St., Suite 508</span>
        <span id="city-zip">Honolulu, HI 96813</span>
        <span id="linkedin-icon">
            <a href="https://www.linkedin.com/company/sales-consultants-and-management-recruiters-of-honolulu/about/"><img src={Image.linkedIn} alt="linkedin"></img></a>
        </span>
        <span id="copyright">© 2021 MRI and MRINetwork are registered trademarks of Management Recruiters International, Inc.</span>
    </div>
)

export default Footer;