import React, { Component } from 'react';
import Image from './../Data/imageDir';
import { /*Route,*/ Link } from 'react-router-dom';
/*import ResumeGuidelines from '../components/ResumeGuidelines';
import InterviewTips from '../components/InterviewTips';
import CounterOffer from '../components/CounterOffer'; 
import ReloInfo from '../components/ReloInfo'; 
import Submit from '../components/Submit';*/
import '../componentCSS/CandidateResources.css';

class CandidateResources extends Component {
    constructor() {
        super();
        this.state = {
            hover: ''
        }
    }
    mouseEnter1() {
        this.setState({ hover: 'rg' })
    }
    mouseEnter2() {
        this.setState({ hover: 'it' })
    }
    mouseEnter3() {
        this.setState({ hover: 'co' })
    }
    mouseEnter4() {
        this.setState({ hover: 'ri' })
    }
    mouseEnter5() {
        this.setState({ hover: 'sr' })
    }
    mouseLeave() {
        this.setState({ hover: '' })
    }

    render() {
        return (
            <div>
                <img src={Image.canRec} id="CanRec" alt="workspace" style={{ width: '100%' }} data-aos="fade-in" data-aos-delay="300"></img>
                <section className="landing">
                    <span> <p className="can-res-body" data-aos="fade-up">Are you looking for a new career opportunity? Do you
                    need to re-write your resume to create a better impression on hiring authorities?
                    Or are you writing your resume for the first time? Wondering just how much
                    relocation for a new job in a new locale may cost? Then you've come to the
                    right place!</p>
                    </span>
                    <p className="can-links" align="center" data-aos="fade-left">

                        <Link to='/ResumeGuidelines'
                            id="resguide" style={{ fontSize: this.state.hover === 'rg' ? '19px' : '18px', color: this.state.hover === 'rg' ? 'lightcoral' : '#8f6471' }}
                            onMouseEnter={() => this.mouseEnter1()}
                            onMouseLeave={() => this.mouseLeave()}>
                            Resume Guide
                        </Link>|

                        <Link to='/InterviewTips'
                            id="inttips" style={{ fontSize: this.state.hover === 'it' ? '19px' : '18px', color: this.state.hover === 'it' ? 'lightcoral' : '#8f6471' }}
                            onMouseEnter={() => this.mouseEnter2()}
                            onMouseLeave={() => this.mouseLeave()}>
                            Interview Tips
                        </Link>|

                        <Link to='/CounterOffer'
                            id="counter" style={{ fontSize: this.state.hover === 'co' ? '19px' : '18px', color: this.state.hover === 'co' ? 'lightcoral' : '#8f6471' }}
                            onMouseEnter={() => this.mouseEnter3()}
                            onMouseLeave={() => this.mouseLeave()}>
                            Considering the Counteroffer
                        </Link>|

                        <Link to='/ReloInfo'
                            id="reloinfo" style={{ fontSize: this.state.hover === 'ri' ? '19px' : '18px', color: this.state.hover === 'ri' ? 'lightcoral' : '#8f6471' }}
                            onMouseEnter={() => this.mouseEnter4()}
                            onMouseLeave={() => this.mouseLeave()}>
                            Relocation Info
                        </Link> |

                        <Link to='/Submit'
                            id="submit" style={{ fontSize: this.state.hover === 'sr' ? '19px' : '18px', color: this.state.hover === 'sr' ? 'lightcoral' : '#8f6471' }}
                            onMouseEnter={() => this.mouseEnter5()}
                            onMouseLeave={() => this.mouseLeave()}>
                            Submit Your Resume
                        </Link>
                    </p>
                </section>
            </div>
        )
    }
}

export default CandidateResources;