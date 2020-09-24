import React from 'react';
import { Link } from 'react-router-dom';
import Image from './../Data/imageDir';
import '../componentCSS/HowWeWork.css';

const HowWeWork = () => (

<div>
        <div id="how-we-work">
            <div id="pic">
                <img src={ Image.howWeWork } alt="ocean" style={{width: '100%'}} data-aos="fade-in" data-aos-delay="300"></img>
            </div>
            <h1>How We Work</h1>

            <p className="smalltxt" data-aos="fade-in">Sales Consultants & Management Recruiters of Honolulu is dedicated to helping you as a hiring authority find the right talent. Not only do we find a qualify the best talents for you to interview and consider, we also offer a few tips and guidelines based on our years of experience in the executive and sales search industry to help you in your decision making process.</p>

            <h3 data-aos="fade-right">How Your Company Can Benefit</h3>

            <p className="smalltxt" data-aos="fade-in">If you're in need of new talent to grow and build your business, an executive search firm can find and sell your opportunity to the top performers in the industry, bringing your company an immediate impact with a proven producer. This is a decisive cost/benefit advantage compared to the typical method of running a help wanted ad in the local paper and spending countless hours screening hundreds of resumes and interviewing scores of candidates. When you hire an executive recruiter to carry out a search assignment for you, you only see the resumes and interview the candidates that have already been screened out and qualified based on experience - leaving you to focus on personal chemistry, communication skills and how well the candidate could adapt to your company's culture during the interview process.</p>

            <h3 data-aos="fade-right">Leveraging Our Geographic Advantage</h3>
            <p className="smalltxt" data-aos="fade-in">

            We are uniquely located in the Pacific Time zone, which gives us the strategic advantage of being able to talk to a larger number of candidates. While in the middle of our business day, we can contact potential candidates before or after their work hours in their respective time zones in the East or West. This allows us to talk to more candidates to make sure we bring the best talent to you as a hiring manager.


            Why Recruiting is a Better Value Than Simply Posting On the Internet
            Savvy employers know that simply posting jobs to the Web isn't enough to find the best talent. Most job boards' databases are littered with postings, virtually guaranteeing that the best candidates will never find the best jobs.

            Management Recruiters & Sales Consultants of Honolulu take the Internet job search far beyond the standard database model. The 5,000 recruiters in MRI Network place top candidates in every major industry, at every level, at a rate of 34,000 per year.

            MRI Network's recruiters are industry experts: trained professionals who have real-world experience in their fields. Linked through a suite of real-time communications tools, our recruiters work to anticipate workplace trends, to manage client information, and to find, screen and recommend the best talent in each industry.

            Our recruiters also factor in the human element—personality traits, leadership qualities, critical-thinking skills—that no job board can ever reveal. When it comes to finding the best talent, no organization is better positioned to serve as your staffing partner than MRI Network.

            Working within specialized industries, MRI Network consistently delivers the highest-quality candidates at every level to clients both large and small, in every major US industry. Together with the more than 1,000 offices and 5,000 recruiters, MRI Network comprises the most powerful search and recruitment organization in the world.
            </p>

            <div className="back-to">
            <Link to='/EmployerResources' className="can-rec">
                  Back to Employer Resources
            </Link>
        </div>
        </div>
    </div>
)

export default HowWeWork;