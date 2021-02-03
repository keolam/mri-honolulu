import React, { Component } from 'react';
import Image from './../Data/imageDir'
import { Link } from 'react-router-dom';
import '../componentCSS/Landing.css'

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            hover: ''
        }
    }
    mouseEnter1() {
        this.setState({ hover: 'jl' })
    }
    mouseEnter2() {
        this.setState({ hover: 'er' })
    }
    mouseEnter3() {
        this.setState({ hover: 'cr' })
    }
    mouseLeave() {
        this.setState({ hover: '' })

    }
    render() {
        return (
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
                            <div className="ind-icon"><img src={Image.officeSup}></img></div>
                            <div className="right-img-container"><img id="office-img" src={Image.officeEquip} alt=""></img></div>
                        </div>
                        <div id="office-text" className="right-text">Office Product & Equipment Sales</div>
                    </div>

                    <div className="left-one" data-aos="fade-left">
                        <div className="left-img-row">
                            <div className="left-img-container"><img id="imt-img" src={Image.itSales} alt=""></img></div>
                            <div className="ind-icon"><img src={Image.satellite}></img></div>
                        </div>
                        <div id="it-text" className="left-text">Information Technology Sales</div>
                    </div>

                    <div className="right-one" data-aos="fade-right">
                        <div className="right-img-row">
                            <div className="ind-icon"><img src={Image.teleData}></img></div>
                            <div className="right-img-container"><img id="tele-img" src={Image.telecom} alt=""></img></div>
                        </div>
                        <div id="telecom" className="right-text">Telecommunications & Data Networking</div>
                    </div>

                    <div className="left-one" data-aos="fade-left">
                        <div className="left-img-row">
                            <div className="left-img-container"><img id="const-img" src={Image.construction} alt=""></img></div>
                            <div className="ind-icon"><img src={Image.conArchEng}></img></div>
                        </div>
                        <div id="construction" className="left-text">Construction, Architecture & Engineering</div>
                    </div>

                    <div className="right-one" data-aos="fade-right">
                        <div className="right-img-row">
                            <div className="ind-icon"><img src={Image.factory}></img></div>
                            <div className="right-img-container"><img id="indust-img" src={Image.environmental} alt=""></img></div>
                        </div>
                        <div id="indust" className="right-text">Industrial & Environmental Services</div>
                    </div>
                </section>
                <div id="midpage-graphic" data-aos="fade-in" data-aos-delay="10">
                    <h2>This is badass!</h2>
                </div>
                <section className="ind-list" data-aos="fade-in">
                    <div className="left-one" data-aos="fade-left">
                        <div className="left-img-row">
                            <div className="left-img-container"><img id="consumer-img" src={Image.retail} alt=""></img></div>
                            <div className="ind-icon"><img src={Image.cashRegister}></img></div>
                        </div>
                        <div id="consumer" className="left-text">Consumer Goods & Retail</div>
                    </div>

                    <div className="right-one" data-aos="fade-right">
                        <div className="right-img-row">
                            <div className="ind-icon"><img src={Image.dining}></img></div>
                            <div className="right-img-container"><img id="restaurant-img" src={Image.restaurant} alt=""></img></div>
                        </div>
                        <div id="restaurant" className="right-text">Restaurant & Food Service Sales</div>
                    </div>

                    <div className="left-one" data-aos="fade-left">
                        <div className="left-img-row">
                            <div className="left-img-container"><img id="pharma-img" src={Image.healthcare} alt=""></img></div>
                            <div className="ind-icon"><img src={Image.stetho}></img></div>
                        </div>
                        <div id="health" className="left-text">Healthcare Sales</div>
                    </div>

                    <div className="right-one" data-aos="fade-right">
                        <div className="right-img-row">
                            <div className="ind-icon"><img src={Image.bank}></img></div>
                            <div className="right-img-container"><img id="bank-img" src={Image.banking} alt=""></img></div>

                        </div>
                        <div id="banking" className="right-text">Banking & Finance</div>
                    </div>

                    <div className="left-one" data-aos="fade-left">
                        <div className="left-img-row">
                            <div className="ind-icon"><img src={Image.pharma}></img></div>
                            <div className="left-img-container"><img id="health-img" src={Image.medical} alt=""></img></div>
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
                <div className="bottom-links" data-aos="fade-in" data-aos-delay="600">
                    <Link to='/JobListings' id="job-listing" data-aos="fade-in" data-aos-delay="1000"
                        style={{
                            fontSize: this.state.hover === 'jl' ? '1.2rem' : '1.15rem',
                            color: this.state.hover === 'jl' ? 'lightcoral' : '#8f6471'
                        }}
                        onMouseEnter={() => this.mouseEnter1()}
                        onMouseLeave={() => this.mouseLeave()}>
                        Job Listings
                    </Link>
                    <Link to='/EmployerResources' id="emp-rec" data-aos="fade-in" data-aos-delay="1000"
                        style={{
                            fontSize: this.state.hover === 'er' ? '1.2rem' : '1.15rem',
                            color: this.state.hover === 'er' ? 'lightcoral' : '#8f6471'
                        }}
                        onMouseEnter={() => this.mouseEnter2()}
                        onMouseLeave={() => this.mouseLeave()}>
                        Employer Resources
                    </Link>
                    <Link to='/CandidateResources' id="can-rec"
                        style={{
                            fontSize: this.state.hover === 'cr' ? '1.2rem' : '1.15rem',
                            color: this.state.hover === 'cr' ? 'lightcoral' : '#8f6471'
                        }}
                        onMouseEnter={() => this.mouseEnter3()}
                        onMouseLeave={() => this.mouseLeave()}>
                        Candidate Resources
                    </Link>
                </div>
            </section>
        );
    }
}
export default Landing;