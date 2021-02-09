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
    mouseEnter(key) {
        this.setState({ hover: key })
    }
    mouseLeave(key){
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
            <div id="bottom-links" data-aos="fade-in" data-aos-delay="300">
                {this.state.linkNames.map((linkName) => (    
                    <Link to={linkName.includes('Main') ?  '/' : this.removeSpace(linkName) } 
                        className="b-link" 
                        key={linkName.toLowerCase()}
                        style={{
                            textDecoration: 'none',
                            fontSize: this.state.hover === linkName.toLowerCase() ? '1.2rem' : '1.15rem',
                            color: this.state.hover === linkName.toLowerCase() ? 'lightcoral' : '#8f6471'
                        }}
                        onMouseEnter={() => this.mouseEnter(linkName.toLowerCase())}
                        onMouseLeave={() => this.mouseLeave()}
                    >
                    {linkName}
                    </Link>
                ))}
            </div>                
        )
    }
}

export default BottomNav;