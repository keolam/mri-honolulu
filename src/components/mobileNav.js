import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            showMenu: false,
            hover: ''
        }
    }
    openHamburger() {
        this.setState( {showMenu: true} );
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
    mouseEnter4() {
        this.setState({ hover: 'st' })
    }
    mouseLeave() {
        this.setState({ hover: '' })
    }
    render() {
        return (
            <div className="site-links">
                <div className="hamburger"><img src={Image.hamburger} alt="email"></img></div>
                <Link to='/JobListings' id="job-listing"
                    style={{
                        fontSize: this.state.hover === 'jl' ? '1.2rem' : '1.15rem',
                        color: this.state.hover === 'jl' ? 'lightcoral' : '#8f6471'
                    }}
                    onMouseEnter={() => this.mouseEnter1()}
                    onMouseLeave={() => this.mouseLeave()}>
                    Job Listings
                </Link>
                <Link to='/EmployerResources' id="emp-rec"
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
                <Link to='/OurStaff' id="staff"
                    style={{
                        fontSize: this.state.hover === 'st' ? '1.2rem' : '1.15rem',
                        color: this.state.hover === 'st' ? 'lightcoral' : '#8f6471'
                    }}
                    onMouseEnter={() => this.mouseEnter4()}
                    onMouseLeave={() => this.mouseLeave()}>
                    Our Staff
                </Link>
            </div>
        )
    }
}

export default NavBar;