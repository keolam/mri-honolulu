import React from 'react';
import { Link } from 'react-router-dom';
import Image from './../Data/imageDir';
import '../componentCSS/ReloInfo.css';

const ReloInfo = () => (
    <div>
        <div id="pic">
            <img src={ Image.relo } alt="shipping" style={{width: '100%'}}></img>
        </div>
        <section className="main">
            <div id="title">
                <h1>Relocation Information</h1>
            </div>
            <p id="relo">If you're considering relocating or asking someone else to relocate, you probably have a lot of questions.  From calculating potential expenses to choosing the right community, these tools can help with any move, whether local or cross-country.</p>
        </section>
        <div id="relo-links"> 
            <p className="linktxt"><a href="https://www.nerdwallet.com/cost-of-living-calculator" target="_blank" rel="noopener noreferrer">Salary 
              Calculator</a> - Find out how much you need to make in a new city to maintain 
              your current lifestyle.</p>
            <p className="linktxt"><a href="https://www.updater.com/moving-tips/moving-cost-calculator" target="_blank" rel="noopener noreferrer">Moving 
              Calculator</a> - Use the moving calculator to help budget for your upcoming 
              move.</p>
            <p className="linktxt"><a href="https://www.moving.com/tips/the-moving-checklist-a-timeline-for-your-upcoming-move/" target="_blank" rel="noopener noreferrer">Relocation 
              Wizard</a> - Create a custom timeline to organize the many details of a 
              relocation.</p>
            <p className="linktxt"><a href="https://www.nerdwallet.com/mortgages/mortgage-rates" target="_blank" rel="noopener noreferrer">Mortgage 
              Qualifier</a> - Calculate the housing and real estate you qualify for at 
              current mortgage rates.</p>
            <p className="linktxt"><a href="https://www.realtor.com/mortgage/tools/rent-or-buy-calculator/" target="_blank" rel="noopener noreferrer">Rent-Buy 
              Calculator</a> - Use this calculator to help determine the best solution 
              -- own or rent.</p>
            <p className="linktxt"><a href="https://www.moving.com/real-estate/compare-cities/" target="_blank" rel="noopener noreferrer">Community 
              Close-Up</a> - Compare Cities  demographics, income, housing facts, and educational data.</p>
              </div>
            <div id="candidate-footer">
                    <Link to='/CandidateResources' className="can-rec">
                         Back to Candidate Resources
                    </Link>
        </div>
    </div>       
);

export default ReloInfo;