import React, { Component } from 'react';
import Image from './../Data/imageDir'
import '../componentCSS/Landing.css'

class Landing extends Component {
    render() {
        return (  
            <section className="landing">
                <img src={ Image.honolulu } id="hero" alt="honolulu" data-aos="fade-in" data-aos-delay="300"></img>
                <section id="brand-title">
                    <p id="brand-one" data-aos="fade-in" data-aos-delay="100">Your executive search solution for finding and recruiting 
                        the people that will make an impact on your business' bottom line.
                    </p>
                    <p id="brand-two" data-aos="fade-in" data-aos-delay="200">Servicing businesses in the Hawaii & the Pacific Rim since 1988, specializing in: </p>
                </section>
                <section className="ind-list" data-aos="fade-in">

                    <div className="right-fade" data-aos="fade-right">
                        <span id="office-text" className="ind-text">Office Product & Equipment Sales</span>
                        <div className="inline-box">    
                            <div className="img-container"><img src={ Image.officeEquip } alt=""></img></div>
                        </div>
                    </div>

                    <div className="left-fade" data-aos="fade-left">
                        <span id="it-text" className="ind-text">Information Technology Sales</span>
                        <div className="inline-box">  
                            <div className="img-container"><img src={ Image.itSales } alt=""></img></div>
                        </div>
                    </div>

                    <div className="right-fade" data-aos="fade-right">
                        <span id="telecom" className="ind-text">Telecommunications & Data Networking</span>
                        <div className="inline-box">    
                            <div className="img-container"><img src={ Image.telecom } alt=""></img></div>
                        </div>
                    </div>

                    <div className="left-fade" data-aos="fade-left">
                        <span id="construction" className="ind-text">Construction, Architecture & Engineering</span>
                        <div className="inline-box">  
                            <div className="img-container"><img src={ Image.construction } alt=""></img></div>
                        </div>
                    </div>

                    <div className="right-fade" data-aos="fade-right">
                        <span id="indust" className="ind-text">Industrial & Environmental Services</span>
                        <div className="inline-box">    
                            <div className="img-container"><img src={ Image.environmental } alt=""></img></div>
                        </div>
                    </div>

                    <div className="left-fade" data-aos="fade-left">
                        <span id="consumer" className="ind-text">Consumer Goods & Retail</span>
                        <div className="inline-box">  
                            <div className="img-container"><img src={ Image.retail } alt=""></img></div>
                        </div>
                    </div>

                    <div className="right-fade" data-aos="fade-right">
                        <span id="restaurant" className="ind-text">Restaurant & Food Service Sales</span>
                        <div className="inline-box">    
                            <div className="img-container"><img src={ Image.restaurant } alt=""></img></div>
                        </div>
                    </div>

                    <div className="left-fade" data-aos="fade-left">
                        <span id="pharma" className="ind-text">Pharmaceutical & Medical Device Sales</span>
                        <div className="inline-box">  
                            <div className="img-container"><img src={ Image.medical } alt=""></img></div>
                        </div>
                    </div>

                    <div className="right-fade" data-aos="fade-right">
                        <span id="banking" className="ind-text">Banking & Finance</span>
                        <div className="inline-box">    
                            <div className="img-container"><img src={ Image.banking } alt=""></img></div>
                        </div>
                    </div>

                    <div className="left-fade" data-aos="fade-left">
                        <span id="health" className="ind-text">Healthcare Sales</span>
                        <div className="inline-box">  
                            <div className="img-container"><img src={ Image.healthcare } alt=""></img></div>
                        </div>
                    </div>
                </section>
                
            </section>
        );
    }
}
export default Landing;

/*
<div className="left-fade" data-aos="fade-left"><img src={ Image.officeEquip } ></img></div>
<div className="right-fade" data-aos="fade-right"><img src={ Image.officeEquip } ></img></div>
<div className="left-fade" data-aos="fade-left"><img src={ Image.officeEquip } ></img></div>
<div className="right-fade" data-aos="fade-right"><img src={ Image.officeEquip } ></img></div>
<div className="left-fade" data-aos="fade-left"><img src={ Image.officeEquip } ></img></div>
<div className="right-fade" data-aos="fade-right"><img src={ Image.officeEquip } ></img></div>
<div className="left-fade" data-aos="fade-left"><img src={ Image.officeEquip } ></img></div>
<div className="right-fade" data-aos="fade-right"><img src={ Image.officeEquip } ></img></div>


<div id="industry-list">
</div>
*/