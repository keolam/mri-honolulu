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
                    <Route path="/CandidateResources"component={CandidateResources} />
                    <Route path="/OurStaff" component={OurStaff} />
                    <Route path="/ReloInfo" component={ReloInfo} />
                    <Route path="/Submit" component={Submit} />
                </main>
                <footer>
                    <p id ="contact"> 
                    <span><i className="fas fa-phone" style={{marginRight: '8px', marginLeft: '8px'}}></i><span className="footer-text"> Tel:  808.533.3282</span></span>
                    <span><i className="fas fa-fax" style={{marginRight: '8px', marginLeft: '8px'}}></i><span className="footer-text"> Fax:  808.533.6162 </span></span> 
                    <span><i className="fas fa-envelope" style={{marginRight: '8px', marginLeft: '8px'}}> </i><span className="footer-text">Email:  mail@mrihonolulu.com</span></span> 
                    </p>
                </footer>
            </div>
        );
    }
}

export default App;
