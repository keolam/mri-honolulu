import React from 'react';
import Carousel from 'nuka-carousel';
import LazyLoad from 'react-lazyload';
import Image from '../Data/imageDir';
import '../componentCSS/Carousel.css'

const IndustryPics = () => (
    <div id="image-carousel">
        <div id="carousel-container">
            <LazyLoad height={250} once={true}>
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