import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './ResponsiveNav';
import '../componentCSS/Header.css'

 const Header = () => (         
    <nav>
        <div className="mri-logo">
            <Link to='/' id="business-name">
                <p id="mr">MANAGEMENT RECRUITERS &</p>
                <p id="sc">SALES CONSULTANTS</p>
                <p id="hnl">of Honolulu</p>
            </Link>
        </div>
        <NavBar /> 
    </nav>
)

export default Header;