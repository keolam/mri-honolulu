import React, { Component } from 'react';
import Image from './../Data/imageDir';
import { Route, Link } from 'react-router-dom';
import Submit from '../components/Submit';
import '../componentCSS/CandidateResources.css';

class CandidateResources extends Component {
    constructor () {
        super();
        this.state = {
            hover: ''
        }
    }
    mouseEnter1() {
        this.setState({hover: 'jl'})
    }
    mouseLeave() {
      this.setState({hover: ''})
    }

    render() {
        return(
            <div>
                <img src={ Image.canRec } id="CanRec" alt="workspace" style={{width: '100%'}}></img>
                <section className="landing">
                    <span> <p className="can-res-body">Are you looking for a new career opportunity? Do you 
                    need to re-write your resume to create a better impression on hiring authorities? 
                    Or are you writing your resume for the first time? Wondering just how much 
                    relocation for a new job in a new locale may cost? Than you've come to the 
                    right place!</p>
                    </span>
                <p className="can-links" align="center"><a href="resguide/resguide.htm" target="_self" className="links">Resume 
                Guidelines</a> | <a href="inttips/inttips.htm" target="_self" className="links">Interviewing 
                Tips</a> | <a href="counteroffer.htm">Considering the Counteroffer</a> | <a href="reloinfo/reloinfo.htm" target="_self">Relocation 
                Info</a> |   
        
                    <Link to='/Submit' 
                        id="submit" style={{ fontSize: this.state.hover === 'jl' ? '19px': '18px', color: this.state.hover === 'jl' ? 'lightcoral': '#8f6471'}}                    
                        onMouseEnter={ ()=> this.mouseEnter1() }
                        onMouseLeave ={ () =>this.mouseLeave() }>
                        Submit Your Resume
                    </Link>
                                        
                    <div id="cand-links"> 
                        <Route path="/Submit" component={Submit} />
                    </div>
                </p>
                </section>
            </div>
        )
    }
}

export default CandidateResources;
// <!--a href="submit.htm" target="_self" class="links">Submit Your Resume</a></p-->