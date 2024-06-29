import React from 'react';
import '../css/about.css'
import Footer from '../component/Footer';
const About = () => {
    return (
        <div className='about '>
 <div className='container'>
            <h2 className='text-center p-2 aboutCol'>About Us</h2>

            <h2 className='text-center'>Welcome to Chennai College Finder!</h2>

            <p className='paras'>
                At Chennai College Finder, our goal is to simplify your search for the perfect college in Chennai. We understand that choosing the right college is a crucial decision, and we are here to provide you with comprehensive information and resources to make that choice easier.
            </p>
            <h2>
                Our Mission*
            </h2>

            <p className='paras'>
                Our mission is to connect students with colleges that best fit their academic interests, career goals, and personal preferences. We aim to be the most reliable and user-friendly platform for finding colleges in Chennai, ensuring that students can make informed decisions about their education.
            </p>
            <h2>
                What We offer
            </h2>

            <p className='paras'>1. *Comprehensive College Listings:* Detailed profiles of colleges in Chennai, including courses offered, faculty, facilities, and more.
            </p>
            <p className='paras'>2. *Advanced Search Filters:* Easily search and filter colleges based on your preferences, such as location, courses, fees, and rankings.
            </p>
            <p className='paras'>3. *Student Reviews and Ratings:* Honest reviews and ratings from current students and alumni to give you a real insight into each college.
            </p>
            <p className='paras'>4. *Admission Guidance:* Information on admission processes, eligibility criteria, and important dates to help you apply with confidence.
            </p>
            <p className='paras'>5. *Career Resources:* Guidance on career paths, internships, and job opportunities related to various fields of study
            </p>
        </div>
        <Footer/>
        </div>
    );
};

export default About;