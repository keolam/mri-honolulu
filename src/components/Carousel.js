import React from 'react';
import Carousel from 'nuka-carousel';
import LazyLoad from 'react-lazyload';
import Image from '../Data/imageDir';
import '../componentCSS/Carousel.css'

const IndustryPics = () => (
    <div id="image-carousel">
        <div id="carousel-container">
            <LazyLoad height={350} once={true}>
                < Carousel autoplay={true} wrapAround={true} speed="1000" >
                    <div className="pictureBox">
                        <div className="img-container">
                            <div className="pic-container">
                                <img className="background-pic" src={Image.officeEquip} alt="office"></img>
                                <img className="icon" src={Image.officeSup} alt="office"></img>
                            </div>
                            <div className="industry">Office Product & Equipment Sales</div>
                        </div>
                    </div>

                    <div className="pictureBox">
                        <div className="img-container">
                            <div className="pic-container">
                                <img className="background-pic" src={Image.itSales} alt="IT"></img>
                                <img className="icon" src={Image.satellite} alt="IT"></img>
                            </div>
                            <div className="industry">Information Technology Sales</div>
                        </div>
                    </div>

                    <div className="pictureBox">
                        <div className="img-container">
                            <div className="pic-container">
                                <img className="background-pic" src={Image.telecom} alt="telecom"></img>
                                <img className="icon" src={Image.teleData} alt="telecom"></img>
                            </div>
                            <div className="industry">Telecommunications & Data Networking</div>
                        </div>
                    </div>

                    <div className="pictureBox">
                        <div className="img-container">
                            <div className="pic-container">
                                <img className="background-pic" src={Image.construction} alt="construction"></img>
                                <img className="icon" src={Image.conArchEng} alt="construction"></img>
                            </div>
                            <div className="industry">Construction, Architecture & Engineering</div>
                        </div>
                    </div>
                    
                    <div className="pictureBox">
                        <div className="img-container">
                            <div className="pic-container">
                                <img className="background-pic" src={Image.environmental} alt="industry"></img>
                                <img className="icon" src={Image.factory} alt="industry"></img>
                            </div>
                            <div className="industry">Industrial & Environmental Services</div>
                        </div>
                    </div>
                    
                    <div className="pictureBox">
                        <div className="img-container">
                            <div className="pic-container">
                                <img className="background-pic" src={Image.retail} alt="retail"></img>
                                <img className="icon" src={Image.cashRegister} alt="retail"></img>
                            </div>
                            <div className="industry">Consumer Goods & Retail</div>
                        </div>
                    </div>
  
                    <div className="pictureBox">
                        <div className="img-container">
                            <div className="pic-container">
                                <img className="background-pic" src={Image.restaurant} alt="restaurant"></img>
                                <img className="icon" src={Image.dining} alt="restaurant"></img>
                            </div>
                            <div className="industry">Restaurant & Food Service Sales</div>
                        </div>
                    </div>

                    <div className="pictureBox">
                        <div className="img-container">
                            <div className="pic-container">
                                <img className="background-pic" src={Image.healthcare} alt="healthcare"></img>
                                <img className="icon" src={Image.stetho} alt="healthcare"></img>
                            </div>
                            <div className="industry">Healthcare Sales</div>
                        </div>
                    </div>

                    <div className="pictureBox">
                        <div className="img-container">
                            <div className="pic-container">
                                <img className="background-pic" src={Image.banking} alt="bank"></img>
                                <img className="icon" src={Image.bank} alt="bank"></img>
                            </div>
                            <div className="industry">Banking & Finance</div>
                        </div>
                    </div>

                    <div className="pictureBox">
                        <div className="img-container">
                            <div className="pic-container">
                                <img className="background-pic" src={Image.medical} alt="pharma"></img>
                                <img className="icon" src={Image.pharma} alt="pharma"></img>
                            </div>
                            <div className="industry">Pharmaceutical & Medical Device Sales</div>
                        </div>
                    </div>
                </ Carousel>
            </LazyLoad>
        </div>
    </div >
)

export default IndustryPics;

/*
<div className="pictureBox">
    <div><img ></img></div>
    <div><img ></img></div>
    <div></div>
</div>
*/