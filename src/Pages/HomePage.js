import React from 'react';
import FrontBanner from './../Components/FrontBanner/FrontBanner';
import AcademyMotto from '../Components/AcamdeyMotto/AcademyMotto';
import './HomePage.css'
import ProgramFeatures from '../Components/ProgramFeatures/ProgramFeatures';
import Curriculum from '../Components/Curriculum/Curriculum';
import Review from '../Components/Review/Review';

const HomePage = () => {
    return (
        <div className='homepage-container'>
            <FrontBanner />
            <AcademyMotto />
            <ProgramFeatures/>
            <Curriculum/>
            <Review/>
        </div>
    );
}

export default HomePage;
