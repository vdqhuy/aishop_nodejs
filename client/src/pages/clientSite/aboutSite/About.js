import React from 'react';
import Header from '../commonComponents/Header';
import Footer from '../commonComponents/Footer';
import './About.css'

function About() {
    return (
        <div>
            <Header />
            <h1 className='about__header'>About</h1>
            <Footer />
        </div>
    )
}

export default About