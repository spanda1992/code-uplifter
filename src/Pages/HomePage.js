import React from 'react';
import FrontBanner from './../Components/FrontBanner/FrontBanner';
import AcademyMotto from '../Components/AcamdeyMotto/AcademyMotto';
import './HomePage.css'

const HomePage = () => {
    return (
        <div className='homepage-container'>
            <FrontBanner />
            <AcademyMotto />
        </div>
    );
}

export default HomePage;
