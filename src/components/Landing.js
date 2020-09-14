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
                    <div id="industry-list">
                        <div data-aos="fade-left"><img src={ Image.officeEquip } ></img>Office Product & Equipment Sales</div>
                        <div data-aos="fade-right">Information Technology Sales<img src={ Image.officeEquip } ></img></div>
                        <div data-aos="fade-left">Telecommunications & Data Networking</div>
                        <div data-aos="fade-right">Construction, Architecture & Engineering</div>
                        <div data-aos="fade-left">Industrial & Environmental Services</div>
                        <div data-aos="fade-right">Consumer Goods & Retail</div>
                        <div data-aos="fade-left">Restaurant & Food Service Sales</div>
                        <div data-aos="fade-right">Pharmaceutical & Medical Device Sales</div>
                        <div data-aos="fade-left">Healthcare Sales</div>
                        <div data-aos="fade-right">Banking & Finance</div>
                    </div>
                </section>
                
            </section>
        );
    }
}
export default Landing;