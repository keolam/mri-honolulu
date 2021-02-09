import React, { Component } from 'react';
import Image from '../Data/imageDir';
import BottomNav from './BottomNav';
/*import { Link } from 'react-router-dom';*/
import '../componentCSS/Landing.css'

const Main = () => ( 
    <section className="landing">
        <img src={Image.honolulu} id="diamond-head" alt="honolulu" data-aos="fade-in" data-aos-delay="300"></img>
        <section id="brand-title">
            <p id="brand-one" data-aos="fade-in" data-aos-delay="100">Your executive search solution for finding and recruiting
                the people that will make an impact on your business' bottom line.
            </p>
            <p id="brand-two" data-aos="fade-in" data-aos-delay="200">Servicing businesses in the Hawaii & the Pacific Rim since 1988, specializing in: </p>
        </section>
        <section className="ind-list" data-aos="fade-in">

            <div className="right-one" data-aos="fade-right">
                <div className="right-img-row">
                    <div className="ind-icon"><img src={Image.officeSup} alt="office"></img></div>
                    <div className="right-img-container"><img id="office-img" src={Image.officeEquip} alt="office"></img></div>
                </div>
                <div id="office-text" className="right-text">Office Product & Equipment Sales</div>
            </div>

            <div className="left-one" data-aos="fade-left">
                <div className="left-img-row">
                    <div className="left-img-container"><img id="imt-img" src={Image.itSales} alt="IT"></img></div>
                    <div className="ind-icon"><img src={Image.satellite} alt="IT"></img></div>
                </div>
                <div id="it-text" className="left-text">Information Technology Sales</div>
            </div>

            <div className="right-one" data-aos="fade-right">
                <div className="right-img-row">
                    <div className="ind-icon"><img src={Image.teleData} alt="telecom"></img></div>
                    <div className="right-img-container"><img id="tele-img" src={Image.telecom} alt="telecom"></img></div>
                </div>
                <div id="telecom" className="right-text">Telecommunications & Data Networking</div>
            </div>

            <div className="left-one" data-aos="fade-left">
                <div className="left-img-row">
                    <div className="left-img-container"><img id="const-img" src={Image.construction} alt="construction"></img></div>
                    <div className="ind-icon"><img src={Image.conArchEng} alt="construction"></img></div>
                </div>
                <div id="construction" className="left-text">Construction, Architecture & Engineering</div>
            </div>

            <div className="right-one" data-aos="fade-right">
                <div className="right-img-row">
                    <div className="ind-icon"><img src={Image.factory} alt="industry"></img></div>
                    <div className="right-img-container"><img id="indust-img" src={Image.environmental} alt="industry"></img></div>
                </div>
                <div id="indust" className="right-text">Industrial & Environmental Services</div>
            </div>
        </section>
        <div id="midpage-graphic" data-aos="fade-in" data-aos-delay="10">
            <h2>We believe effective talent advisory and search firms can change lives and industries.</h2>
        </div>
        <section className="ind-list" data-aos="fade-in">
            <div className="left-one" data-aos="fade-left">
                <div className="left-img-row">
                    <div className="left-img-container"><img id="consumer-img" src={Image.retail} alt="retail"></img></div>
                    <div className="ind-icon"><img src={Image.cashRegister} alt="retail"></img></div>
                </div>
                <div id="consumer" className="left-text">Consumer Goods & Retail</div>
            </div>

            <div className="right-one" data-aos="fade-right">
                <div className="right-img-row">
                    <div className="ind-icon"><img src={Image.dining} alt="restaurant"></img></div>
                    <div className="right-img-container"><img id="restaurant-img" src={Image.restaurant} alt="restaurant"></img></div>
                </div>
                <div id="restaurant" className="right-text">Restaurant & Food Service Sales</div>
            </div>

            <div className="left-one" data-aos="fade-left">
                <div className="left-img-row">
                    <div className="left-img-container"><img id="pharma-img" src={Image.healthcare} alt="healthcare"></img></div>
                    <div className="ind-icon"><img src={Image.stetho} alt="healthcare"></img></div>
                </div>
                <div id="health" className="left-text">Healthcare Sales</div>
            </div>

            <div className="right-one" data-aos="fade-right">
                <div className="right-img-row">
                    <div className="ind-icon"><img src={Image.bank} alt="bank"></img></div>
                    <div className="right-img-container"><img id="bank-img" src={Image.banking} alt="bank"></img></div>
                </div>
                <div id="banking" className="right-text">Banking & Finance</div>
            </div>

            <div className="left-one" data-aos="fade-left">
                <div className="left-img-row">
                    <div className="ind-icon"><img src={Image.pharma} alt="pharma"></img></div>
                    <div className="left-img-container"><img id="health-img" src={Image.medical} alt="pharma"></img></div>
                </div>
                <div id="pharma" className="left-text">Pharmaceutical & Medical Device Sales</div>
            </div>
        </section>
        <div id="video-section">
            <div id="video-frame" data-aos="fade-in" data-aos-delay="600">
                <iframe id="video"
                    src="https://player.vimeo.com/video/39697431"
                    title="MRINetwork Impact Players"
                    frameBorder="0"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen={true}
                >
                </iframe>
            </div>
        </div>
        <BottomNav name="Main" />
    </section>
)
export default Main;