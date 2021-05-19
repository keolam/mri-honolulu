import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import LazyLoad from "react-lazyload";
import './App.css';
import Main from './components/Main';
import JobListings from './components/JobListings';
import EmployerResources from './components/EmployerResources';
import CandidateResources from './components/CandidateResources';
import OurStaff from './components/OurStaff';
import Submit from './components/Submit';
import ReloInfo from './components/ReloInfo';
import CounterOffer from './components/CounterOffer';
import InterviewTips from './components/InterviewTips';
import ResumeGuidelines from './components/ResumeGuidelines';
import ContactInfo from './components/ContactInfo';
import Objective from './components/Objective';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Finish from './components/Finish';
import Tips from './components/Tips';
import HowWeWork from './components/HowWeWork';
import ValueAddedServices from './components/ValueAddedServices';
import InterviewGuide from './components/InterviewGuide';
import ResumeBasics from './components/ResumeBasics';
import TraditionalFormats from './components/TraditionalFormats';
import AlternativeFormats from './components/AlternativeFormats';
import WebReady from './components/WebReady';
import Scannable from './components/Scannable';
import ProjectFocused from './components/ProjectFocused';
import ScrollToTop from './helpers/ScrollToTop';
import Footer from './components/Footer';   
import Header from './components/Header';

const App = () => (
    <Router>
        <div className="App">

            <Header />    

            <main id="front-page">
                <ScrollToTop />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/JobListings" component={JobListings} />
                    <Route path="/EmployerResources" component={EmployerResources} />
                    <Route path="/HowWeWork" component={HowWeWork} />
                    <Route path="/InterviewGuide" component={InterviewGuide} />
                    <Route path="/ValueAddedServices" component={ValueAddedServices} />
                    <Route path="/CandidateResources" component={CandidateResources} />
                    <Route path="/ResumeGuidelines" component={ResumeGuidelines} />
                    <Route path="/ResumeBasics" component={ResumeBasics} />
                    <Route path="/ContactInfo" component={ContactInfo} />
                    <Route path="/Objective" component={Objective} />
                    <Route path="/Skills" component={Skills} />
                    <Route path="/Experience" component={Experience} />
                    <Route path="/Education" component={Education} />
                    <Route path="/Finish" component={Finish} />
                    <Route path="/Tips" component={Tips} />
                    <Route path="/TraditionalFormats" component={TraditionalFormats} />
                    <Route path="/AlternativeFormats" component={AlternativeFormats} />
                    <Route path="/WebReady" component={WebReady} />
                    <Route path="/Scannable" component={Scannable} />
                    <Route path="/ProjectFocused" component={ProjectFocused} />
                    <Route path="/InterviewTips" component={InterviewTips} />
                    <Route path="/CounterOffer" component={CounterOffer} />
                    <Route path="/ReloInfo" component={ReloInfo} />
                    <Route path="/Submit" component={Submit} />
                    <Route path="/OurStaff" component={OurStaff} />
                    <Route render={
                        () => <h3 style={{ textAlign: "center", fontSize: "3rem" }}>404 Not Found<br />Please verify URL</h3>
                    } 
                />
                </Switch>
            </main>

            <Footer />
            
        </div>
    </Router>
)

export default App;
