import React from 'react';
import Header from '../commonComponents/Header';
import Footer from '../commonComponents/Footer';
import HomeSlider from './HomeSlider';
import HomeBrand from './HomeBrand';
import HomeBestSales from './HomeBestSales';
import './Home.css';

function Home() {
    return (
        <div className='Home'>
            <Header />
            <HomeSlider />
            <HomeBrand />
            <HomeBestSales />
            <Footer />
        </div>
    )
}

export default Home