import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops'
import './App.css';
import Landing from './components/Landing';
import JobListings from './components/JobListings';
import EmployerResources from './components/EmployerResources';
import CandidateResources from './components/CandidateResources';
import OurStaff from './components/OurStaff';
import Submit from './components/Submit';
import ReloInfo from './components/ReloInfo';
import CounterOffer from './components/CounterOffer';
import InterviewTips from './components/InterviewTips';
import ResumeGuidelines from './components/ResumeGuidelines';
import HowWeWork from './components/HowWeWork';
import ValueAddedServices from './components/ValueAddedServices';
import InterviewGuide from './components/InterviewGuide';
import Image from './Data/imageDir';


class App extends Component {
    constructor () {
        super();
        this.state = {
          hover: ''
        }
    }
    mouseEnter1() {
        this.setState({hover: 'jl'})
    }
    mouseEnter2() {
      this.setState({hover: 'er'})
    }
    mouseEnter3() {
      this.setState({hover: 'cr'})
    }
    mouseEnter4() {
      this.setState({hover: 'st'})
    }
    mouseLeave() {
      this.setState({hover: ''})
    }


    render() {
        return (
            <div className="App">
                <header>
                    <nav>
                        <div className="mri-logo">
                            <Link to='/' id="business-name">                           
                                <p id="mr">MANAGEMENT RECRUITERS &</p>
                                <p id="sc">SALES CONSULTANTS</p>
                                <p id="hnl">of Honolulu</p>
                            </Link>
                        </div>
                        <div className="site-links">
                            <Link to='/JobListings' id="job-listing"
                                style={{ fontSize: this.state.hover === 'jl' ? '.65rem': '.6rem',
                                color: this.state.hover === 'jl' ? 'lightcoral': '#8f6471'}}                    
                                onMouseEnter={ ()=> this.mouseEnter1() }
                                onMouseLeave ={ () =>this.mouseLeave() }>
                                Job Listings
                            </Link>
                            <Link to='/EmployerResources' id="emp-rec"
                                style={{ fontSize: this.state.hover === 'er' ? '.65rem': '.6rem',
                                color: this.state.hover === 'er' ? 'lightcoral': '#8f6471'}}
                                onMouseEnter={ ()=> this.mouseEnter2() }
                                onMouseLeave ={ () =>this.mouseLeave() }>                                                  
                                Employer Resources
                            </Link>
                            <Link to='/CandidateResources' id="can-rec"
                                style={{ fontSize: this.state.hover === 'cr' ? '.65rem': '.6rem',
                                color: this.state.hover === 'cr' ? 'lightcoral': '#8f6471'}}
                                onMouseEnter={ ()=> this.mouseEnter3() }
                                onMouseLeave ={ () =>this.mouseLeave() }>
                               Candidate Resources
                            </Link>
                            <Link to='/OurStaff' id="staff"
                                style={{ fontSize: this.state.hover === 'st' ? '.65rem': '.6rem',
                                color: this.state.hover === 'st' ? 'lightcoral': '#8f6471'}}
                                onMouseEnter={ ()=> this.mouseEnter4() }
                                onMouseLeave ={ () =>this.mouseLeave() }>
                                Our Staff
                            </Link>
                        </div>
                    </nav>
                </header>
                <main id="front-page"> 
                    <Route exact path="/" component={Landing} /> 
                    <Route path="/JobListings" component={JobListings} />           
                    <Route path="/EmployerResources" component={EmployerResources} />
                        <Route path="/HowWeWork" component={HowWeWork} />
                        <Route path="/InterviewGuide" component={InterviewGuide} />
                        <Route path="/ValueAddedServices" component={ValueAddedServices} />
                    <Route path="/CandidateResources"component={CandidateResources} />
                        <Route path="/ResumeGuidelines" component={ResumeGuidelines} /> 
                        <Route path="/InterviewTips" component={InterviewTips} />   
                        <Route path="/CounterOffer" component={CounterOffer} />
                        <Route path="/ReloInfo" component={ReloInfo} />
                        <Route path="/Submit" component={Submit} />
                    <Route path="/OurStaff" component={OurStaff} />
                </main>
                <footer>
                    <div id ="contact" data-aos="fade-up" data-aos-offset="180"> 
                        <span id="mail-icon">
                            <a href="mailto: mail@mrihonolulu.com"><img src={Image.mailIcon} alt="email"></img></a>
                        </span>
                        <span id="phone-column">
                            <img src={Image.phone} id="phone-icon" alt="phone"></img>
                            <span className="footer-text">   808.533.3282 <br/> 1.800.879.0448</span>
                        </span>
                        <span id="address-column">
                            <img src={Image.location} id="location-icon" alt="location"></img>
                            <span className="footer-text">   32 Merchant St., Suite 101 <br/> Honolulu, HI 96813    </span>
                        </span>
                        <span id="linkedin-icon">
                            <a href="https://www.linkedin.com/company/sales-consultants-and-management-recruiters-of-honolulu/about/"><img src={Image.linkedIn} alt="linkedin"></img></a>
                        </span>
                    </div>    
                </footer>
            </div>
        );
    }
}

export default App;

/*https://img.icons8.com/color/48/000000/linkedin.png
style={{marginRight: '22px', marginTop: '12px'}}>
<span style={{marginTop: '36px'}}>
*/