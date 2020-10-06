import React from 'react';
import { Link } from 'react-router-dom';
import Image from './../Data/imageDir';
import '../componentCSS/ValueAddedServices.css';
    
const ValueAddedServices = () => (    
    <div>
        <div>
            <div>
                 <img src={ Image.valueAdded} id="pic" alt="graph" style={{width: '100%'}}></img>
            </div>
            <h1>Value-Added Services</h1>
            <p className="smalltxt">
            In addition to finding and recruiting the best candidates for employers to acquire immediate contributors and difference makers in their respective industries, as an MRINetwork affiliate, we also offer the following value-added services for our client companies:
            </p>

            <h3>Compatibility Assessment</h3>

            <p className="smalltxt">SelecSys™ is a computer-based, pre-employment testing and screening system that provides a quick, accurate means of determining a candidate's personality traits and potential "fit" with your company.

            SelecSys™ provides:

            * A detailed, charted assessment of the candidate's personality characteristics .

            * Behavior-based questions for use during the interview process

            * A custom profile of the ideal traits for your position

            * Single-Sourcing: To reduce the inefficiency of working with more than one recruiter, we draw on our extensive menu of services to satisfy our clients' complete staffing needs.
            * International Placement Services: Through our global network of staffing and recruiting professionals we are able to provide our clients with skilled candidates from anywhere in the world.
            </p>
            <h3>Total Relocation Services</h3>

            <p className="smalltxt">
            Quite often in the recruitment process, relocation becomes a major stumbling block. The expense and stress of relocating sometimes mean you don't always get the people you want. To reduce the problems associated with relocating candidates, MRI has developed a comprehensive menu of value-added relocation services that serves both the candidates and our clients, from a detailed cost of living analysis of over 500 cities to special mortgage services and to substantially reduced moving rates. The MRI Relocation Group can make the relocation process easier for both candidate and client. A new service includes the STAR - a spouse relocation program to assist the working spouse to find a satisfying career in the new city.</p>

            <h3>Global Human Resources</h3>

            <p className="smalltxt">We help clients with worldwide staffing needs deal with the intricacies of the international business community, source and recruit the right talent and create acceptable compensation packages.</p>
        </div>
        <div className="back-to">
            <Link to='/EmployerResources' className="can-rec">
                Back to Employer Resources
            </Link>
        </div>
    </div>
)

export default ValueAddedServices;