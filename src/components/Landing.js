import React, { Component } from 'react';
import Image from './../Data/imageDir'
import '../componentCSS/Landing.css'

class Landing extends Component {
    render() {
        return (  
            <section className="landing">
                <img src={ Image.honolulu } id="hero" alt="honolulu" data-aos="fade-in" data-aos-delay="300"></img>
                <section id="brand-title">
                    <p id="brand-one" data-aos-delay="50">Your executive search solution for finding and recruiting 
                        the people that will make an impact on your business' bottom line.
                    </p>
                    <p id="brand-two" data-aos="fade-in" data-aos-delay="200">Servicing businesses in the Hawaii & the Pacific Rim since 1988, specializing in: </p>
                </section>
                <section className="ind-list" data-aos="fade-in">
                    <ul>
                        <li data-aos="fade-left">Office Product & Equipment Sales</li>
                        <li data-aos="fade-right">Information Technology Sales</li>
                        <li data-aos="fade-left">Telecommunications & Data Networking</li>
                        <li data-aos="fade-right">Construction, Architecture & Engineering</li>
                        <li data-aos="fade-left">Industrial & Environmental Services</li>
                        <li data-aos="fade-right">Consumer Goods & Retail</li>
                        <li data-aos="fade-left">Restaurant & Food Service Sales</li>
                        <li data-aos="fade-right">Pharmaceutical & Medical Device Sales</li>
                        <li data-aos="fade-left">Healthcare Sales</li>
                        <li data-aos="fade-right">Banking & Finance</li>
                    </ul>
                </section>
                
            </section>
        );
    }
}
export default Landing;