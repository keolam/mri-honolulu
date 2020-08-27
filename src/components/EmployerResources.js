import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Image from './../Data/imageDir'
import '../componentCSS/EmployerResources.css'
import OurStaff from '../components/OurStaff';

class EmployerResources extends Component {
    constructor () {
        super();
        this.state = {
          hover: ''
        }
    }
    mouseEnter1() {
        this.setState({hover: 'ww'})
    }
    mouseEnter2() {
      this.setState({hover: 'ig'})
    }
    mouseEnter3() {
      this.setState({hover: 'vas'})
    }
    mouseLeave() {
      this.setState({hover: ''})
    }
    
    render() {
        return (
            <div>
                <img src={ Image.dataRoom } id="data-room" alt="workspace" style={{width: '100%'}}></img>
                <h1>Employer Resources</h1>
                <section className="main-paragraph">
                    
                    <p id="p1">
                        Sales Consultants & Management Recruiters of Honolulu is dedicated to helping 
                        you as a hiring authority find the right talent. Not only do we find and qualify the best talents 
                        for you to interview and consider, we also offer a few tips and guidelines based on our years of 
                        experience in the executive and sales search industry to help you in your decision making process.
                    </p>
                    <p>
                        We are uniquely located in the Pacific Time zone, which gives us the strategic advantage of 
                        being able to talk to a larger number of candidates. While in the middle of our business day, 
                        we can contact potential candidates before or after their work hours in their respective time 
                        zones in the East or West. This allows us to talk to more candidates to make sure we bring the
                        best talent to you as a hiring manager.
                    </p>
                    <div className="emp-rec-links">
                        <Link to='/HowWeWork' id="how-we-work"
                            style={{ fontSize: this.state.hover === 'ww' ? '19px': '18px',
                            color: this.state.hover === 'ww' ? '#8f6471':'#118bac'}}                    
                            onMouseEnter={ ()=> this.mouseEnter1() }
                            onMouseLeave ={ () =>this.mouseLeave() }>
                            How We Work
                        </Link>
                        <Link to='/InterviewGuide' id="interview-guide"
                            style={{ fontSize: this.state.hover === 'ig' ? '19px': '18px',
                            color: this.state.hover === 'ig' ? '#8f6471':'#118bac'}}                    
                            onMouseEnter={ ()=> this.mouseEnter2() }
                            onMouseLeave ={ () =>this.mouseLeave() }>
                            Interview Guide 
                            </Link>
                        <Link to='/ValueAddedServices' id="value-added"
                            style={{ fontSize: this.state.hover === 'vas' ? '19px': '18px',
                            color: this.state.hover === 'vas' ? '#8f6471':'#118bac'}}                    
                            onMouseEnter={ ()=> this.mouseEnter3() }
                            onMouseLeave ={ () =>this.mouseLeave() }>
                            Value-Added Services
                        </Link>
                    </div>
                </section>
                <main id="front-page"> 
                    <Route path="/OurStaff" component={OurStaff} />
                    <Route path="/OurStaff" component={OurStaff} />          
                    <Route path="/OurStaff" component={OurStaff} />
                    <Route path="/OurStaff" component={OurStaff} />
                    <Route path="/OurStaff" component={OurStaff} />
                </main>
            </div>
        );
    }
}
export default EmployerResources;