import React, { Component } from 'react';
import Image from './../Data/imageDir'
import '../componentCSS/Landing.css'

class Landing extends Component {
    render() {
        return (  
            <section className="landing">
                <img src={ Image.honolulu } id="hero" alt="honolulu"></img>
                <section id="title">
                    <p>Your executive search solution for finding and recruiting 
                        the people that will make an impact on your business' bottom line.
                    </p>
                    <p>Servicing businesses in the Hawaii & the Pacific Rim since 1988, specializing in: </p>
                </section>
                <section className="ind-list">
                    <ul>
                        <li>Office Product & Equipment Sales</li>
                        <li>Information Technology Sales</li>
                        <li>Telecommunications & Data Networking</li>
                        <li>Construction, Architecture & Engineering</li>
                        <li>Industrial & Environmental Services</li>
                        <li>Consumer Goods & Retail</li>
                        <li>Restaurant & Food Service Sales</li>
                        <li>Pharmaceutical & Medical Device Sales</li>
                        <li>Healthcare Sales</li>
                        <li>Banking & Finance</li>
                    </ul>
                </section>
                
            </section>
        );
    }
}
export default Landing;