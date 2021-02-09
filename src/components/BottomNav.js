import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../componentCSS/ResumeFooter.css'
import '../componentCSS/Landing.css'

class BottomNav extends Component {
    constructor(props) {
        super(props);

        const linkArray = ['Main', 'Job Listings', 'Employer Resources', 'Candidate Resources', 'Our Staff'];
        let linkNames = linkArray.filter(resLink => {
            return resLink !== props.name;
        });

        this.state = {
            hover: '',
            linkNames: linkNames
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
    removeSpace = (string) => {
        if (string.includes(' ')) {
            let wordArr = string.split('');
            wordArr.splice(wordArr.indexOf(' '), 1);
            return wordArr.join('');
        }
        return string;
    }

    render() {
        return (
            <div>
                <div id="bottom-links">
                    {this.state.linkNames.map((linkName) => (    
                        <Link to={linkName.includes('Main') ? linkName = '/' : this.removeSpace(linkName) } className="b-link" key={linkName.toLowerCase()}>
                            {linkName}
                        </Link>
                    ))}
                </div>

                <nav className="bottom-links" data-aos="fade-in" data-aos-delay="600">
                    { /*linkNames.map((linkName) => (
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
                ))*/}
                </nav>
            </div>
        )
    }

}

export default BottomNav;