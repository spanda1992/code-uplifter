import React from 'react';
import './ProgramFeatures.css'
import { FaChalkboardTeacher } from "react-icons/fa";
import { TbGrowth } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";

const ProgramFeatures = () => {
    return (
        <div id="features" className='container mt-5'>
            <div className='program-features-heading'>
                <span> We have designed a program which is flexible and affordable for you.</span>
            </div>
            <div className='my-3 program-features-card-container'>
                <div className='programs-features-cards program-features-card-1'>
                    <div className='w-75 text-align-center'>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
                    </div>
                    <div className='d-flex justify-content-center align-items-center w-25'>
                        <FaChalkboardTeacher className='m-1' size={40} />
                    </div>
                </div>
                <div className='programs-features-cards program-features-card-2'>
                    <div className='w-75 text-align-center'>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
                    </div>
                    <div className='d-flex justify-content-center align-items-center w-25'>
                        <TbGrowth className='m-1' size={40} />
                    </div>
                </div>
                <div className='programs-features-cards program-features-card-3'>
                    <div className='w-75 text-align-center'>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
                    </div>
                    <div className='d-flex justify-content-center align-items-center w-25'>
                        <BsGraphUpArrow className='m-1' size={40} />
                    </div>
                </div>
                <div className='programs-features-cards program-features-card-4'>
                    <div className='w-75 text-align-center'>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
                    </div>
                    <div className='d-flex justify-content-center align-items-center w-25'>
                        <FaHandsHelping className='m-1' size={40} />
                    </div>
                </div>
                <div className='programs-features-cards program-features-card-5'>
                    <div className='w-75 text-align-center'>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
                    </div>
                    <div className='d-flex justify-content-center align-items-center w-25'>
                        <MdOutlineFamilyRestroom className='m-1' size={40} />
                    </div>
                </div>
                <div className='programs-features-cards program-features-card-6'>
                    <div className='w-75 text-align-center'>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
                    </div>
                    <div className='d-flex justify-content-center align-items-center w-25'>
                        <GrStatusGood className='m-1' size={40} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgramFeatures;
