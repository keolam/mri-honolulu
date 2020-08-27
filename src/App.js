import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
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
                        <Link to='/' id="business-name">                           
                            <p id="mr">MANAGEMENT RECRUITERS &</p>
                            <p id="sc">SALES CONSULTANTS</p>
                            <p id="hnl">of Honolulu</p>
                        </Link>
                        <div className="site-links">
                            <Link to='/JobListings' id="job-listing"
                                style={{ fontSize: this.state.hover === 'jl' ? '19px': '18px',
                                color: this.state.hover === 'jl' ? 'lightcoral': '#8f6471'}}                    
                                onMouseEnter={ ()=> this.mouseEnter1() }
                                onMouseLeave ={ () =>this.mouseLeave() }>
                                Job Listings
                            </Link>
                            <Link to='/EmployerResources' id="emp-rec"
                                style={{ fontSize: this.state.hover === 'er' ? '19px': '18px',
                                color: this.state.hover === 'er' ? 'lightcoral': '#8f6471'}}
                                onMouseEnter={ ()=> this.mouseEnter2() }
                                onMouseLeave ={ () =>this.mouseLeave() }>                                                  
                                Employer Resources
                            </Link>
                            <Link to='/CandidateResources' id="can-rec"
                                style={{ fontSize: this.state.hover === 'cr' ? '19px': '18px',
                                color: this.state.hover === 'cr' ? 'lightcoral': '#8f6471'}}
                                onMouseEnter={ ()=> this.mouseEnter3() }
                                onMouseLeave ={ () =>this.mouseLeave() }>
                               Candidate Resources
                            </Link>
                            <Link to='/OurStaff' id="staff"
                                style={{ fontSize: this.state.hover === 'st' ? '19px': '18px',
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
                        <Route path="/ValueAddedServices" component={ValueAddedServices} />
                        <Route path="/InterviewGuide" component={InterviewGuide} />
                    <Route path="/CandidateResources"component={CandidateResources} />
                    <Route path="/OurStaff" component={OurStaff} />
                    <Route path="/ResumeGuidelines" component={ResumeGuidelines} /> 
                            <Route path="/InterviewTips" component={InterviewTips} />   
                            <Route path="/CounterOffer" component={CounterOffer} />
                            <Route path="/ReloInfo" component={ReloInfo} />
                            <Route path="/Submit" component={Submit} />
                </main>
                <footer>
                    <p id ="contact"> 
                    <a rel="icon" href="mailto: mail@mrihonolulu.com"> <span><i className="fas fa-envelope" style={{marginRight: '8px', marginLeft: '-24px', marginTop: '56px',size: 'xLarge'}}> </i></span></a>
                    <span style={{display: 'flex', flexDirection: 'horizontal', marginRight: '16px', marginLeft: '8px', marginTop: '38px'}}>
                        <span rel="icon" className="fas fa-phone" style={{marginRight: '22px', marginTop: '12px'}}></span>
                        <span><span className="footer-text">   808.533.3282 <br/> 1.800.879.0448</span></span>
                    </span>
                        <span style={{marginTop: '36px'}}>
                            <span className="footer-text">   32 Merchant St., Suite 101 <br/> Honolulu, HI 96813    </span>
                        </span>
                        <a href="https://www.linkedin.com/company/sales-consultants-and-management-recruiters-of-honolulu/about/"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedIn" style={{marginTop: '32px', marginRight: '-48px'}}></img></a>
                    </p>    
                </footer>
            </div>
        );
    }
}

export default App;
