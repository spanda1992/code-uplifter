import React from 'react';
import './Curriculum.css'

const Curriculum = () => {
    const [course, setCourse] = React.useState('mern')
    return (
        <div id="curriculum" className='curriculum-container'>
            <div className='container'>
                <div className='d-flex justify-content-center mb-3'>
                    <span className='curriculum-heading'>Our Shared Pathway to Success !!</span>
                </div>
                <div className='curriculum-content-container' >
                    <div className='curriculum-menu-container'>
                        <button
                            onClick={() => setCourse('mern')}
                            className={course === 'mern' ? 'curriculum-menu-button curricululm-menu-button-active' : 'curriculum-menu-button'}
                        >
                            MERN Stack Developer
                        </button>
                        <button
                            onClick={() => setCourse('mean')}
                            className={course === 'mean' ? 'curriculum-menu-button curricululm-menu-button-active' : 'curriculum-menu-button'}
                        >MEAN Stack Developer</button>
                        <button
                            onClick={() => setCourse('java')}
                            className={course === 'java' ? 'curriculum-menu-button curricululm-menu-button-active' : 'curriculum-menu-button'}
                        >
                            Java Full Stack Developer</button>
                    </div>
                    <div className='p-2' style={{ border: '1px solid white', borderRadius: 20, maxWidth: '90vw' }}>
                        {
                            course === 'mern' &&
                            <img src="MERN.svg" width="100%" height='auto' />
                        }
                        {
                            course === 'mean' &&
                            <img src="MEAN.svg" width="100%" height='auto' />
                        }
                        {
                            course === 'java' &&
                            <img src="JAVA.svg" width="100%" height='auto' />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Curriculum;
