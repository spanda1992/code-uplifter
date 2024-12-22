import React from 'react';
import './AcademyMotto.css'
import { PiTreeStructureDuotone } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa6";
import { TbDeviceDesktopQuestion } from "react-icons/tb";
import { AiFillCrown } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";

const AcademyMotto = () => {
    return (
        <div className='container mb-3'>
            <div className='academymotto-container'>
                <div className='card-1 card-container'>
                    <PiTreeStructureDuotone className='mb-3' size={45} />
                    <span>Well Structured Curriculum, Designed by veterans</span>
                </div>
                <div className='card-2 card-container'>
                    <FaLaptopCode className='mb-3' size={45} />
                    <span>Code along with Teachers, Live classes available fro straing</span>
                </div>
                <div className='card-3 card-container'>
                    <TbDeviceDesktopQuestion className='mb-3' size={45} />
                    <span>Coding made easy, Increase your Problem Solving Ability</span>
                </div>
                <div className='card-4 card-container'>
                    <AiFillCrown className='mb-3' size={45} />
                    <span>Job and Placement Oppertunity</span>
                </div>
                <div className='card-5 card-container'>
                    <MdSupportAgent className='mb-3' size={45} />
                    <span>Life time support for your doubts and difficulties in coding</span>
                </div>
                <div className='card-6 card-container'>
                    <GrUserExpert className='mb-3' size={45} />
                    <span>Sharing Practical Experience from the Industry veterans</span>
                </div>
            </div>
        </div>
    );
}

export default AcademyMotto;
