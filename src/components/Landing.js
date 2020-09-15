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
                        <div className="left-fade" data-aos="fade-left"><img src={ Image.officeEquip } ></img>Office Product & Equipment Sales</div>
                        <div className="right-fade" data-aos="fade-right">Information Technology Sales<img src={ Image.officeEquip } ></img></div>
                        <div className="left-fade" data-aos="fade-left"><img src={ Image.officeEquip } ></img>Telecommunications & Data Networking</div>
                        <div className="right-fade" data-aos="fade-right">Construction, Architecture & Engineering<img src={ Image.officeEquip } ></img></div>
                        <div className="left-fade" data-aos="fade-left"><img src={ Image.officeEquip } ></img>Industrial & Environmental Services</div>
                        <div className="right-fade" data-aos="fade-right">Consumer Goods & Retail<img src={ Image.officeEquip } ></img></div>
                        <div className="left-fade" data-aos="fade-left"><img src={ Image.officeEquip } ></img>Restaurant & Food Service Sales</div>
                        <div className="right-fade" data-aos="fade-right">Pharmaceutical & Medical Device Sales<img src={ Image.officeEquip } ></img></div>
                        <div className="left-fade" data-aos="fade-left"><img src={ Image.officeEquip } ></img>Healthcare Sales</div>
                        <div className="right-fade" data-aos="fade-right">Banking & Finance<img src={ Image.officeEquip } ></img></div>
                    </div>
                </section>
                
            </section>
        );
    }
}
export default Landing;