import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from '../Data/imageDir';
import '../componentCSS/ResponsiveNav.css'

class NavBar extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
            hover: ''
        }
    }
    toggleHamburger () {
        this.setState(prevState => ({ 
            showMenu: !prevState.showMenu }) 
        )
    } 
    mouseEnter(key) {
        this.setState({ hover: key })
    }
    mouseLeave(){
        this.setState({ hover: '' })
    }
    removeSpace = (string) => {
        let wordArr = string.split('');
        wordArr.splice(wordArr.indexOf(' '), 1);
        return wordArr.join('');
    }
    siteLinks() {
        const linkNames = ['Job Listings', 'Employer Resources', 'Candidate Resources', 'Our Staff'];
        return (
            <>
                {linkNames.map((linkName) => (    
                    <Link to={linkName.includes(' ') ?  this.removeSpace(linkName): linkName } 
                        className="b-link" 
                        key={linkName.toLowerCase()}
                        style={{
                            fontSize: this.state.hover === linkName.toLowerCase() ? '1.2rem' : '1.15rem',
                            color: this.state.hover === linkName.toLowerCase() ? 'lightcoral' : '#8f6471'
                        }}
                        onMouseEnter={() => this.mouseEnter(linkName.toLowerCase())}
                        onMouseLeave={() => this.mouseLeave()}
                    >
                    {linkName}
                    </Link>
                ))}
            </>
        )
    }
    render() {
        return (
            <>
                <div className="site-links" data-aos="fade-in" data-aos-delay="300">
                    {this.siteLinks()}
                </div>
                <div className="hamburger"><img src={Image.hamburger} alt="navigation" onClick={() => this.toggleHamburger() }></img>
                    <div className="hamburger-links" style={{display: this.state.showMenu === true ? 'flex' : 'none'}}>
                        {this.siteLinks()}
                    </div>
                </div>    
            </>
        )
    }
}

export default NavBar;