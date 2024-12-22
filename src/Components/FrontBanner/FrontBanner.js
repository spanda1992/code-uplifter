import React from 'react';
import './FrontBanner.css'

const FrontBanner = () => {
    const [mobileNumber, setMobileNumber] = React.useState('')
    const [name, setName] = React.useState('')
    const [collegeName, setCollegeName] = React.useState('')

    return (
        <div className='front-banner-container'>
            <div className='container pt-2 pb-3'>
                <div className='font-banner-content'>
                    <div className='front-banner-heading-container'>
                        <div>
                            <div className='main-heading my-2'>
                                We Help You to pursue your Dream Career in IT
                            </div>
                            <div style={{ fontWeight: 300, fontSize: '1rem', color: 'white', textAlign:'center' }}>
                                Based at Bhubaneswar. Come and explore with us !!
                            </div>
                        </div>
                        <div className='mt-4 mb-4'>
                            <button style={{width: '45%'}} className='btn btn-success me-2 py-2'>Call Us</button>
                            <button style={{width: '45%'}} className='btn btn-primary bg-white py-2 text-primary'>Explore Academy</button>
                        </div>
                        <span style={{ fontWeight: 600, fontSize: '1rem', color: 'white' }}>
                           NEXT BATCH STARTS FROM <span className='bg-danger px-2 text-white fw-bold'>MARCH - 2025</span>
                        </span>
                    </div>
                    <div className='bg-white frontpage-banner-form my-2'>
                        <form>
                            <div className='d-flex justify-content-center'>
                                <span style={{fontWeight:'600', fontSize:'22px'}}>Book For a Live Class !!</span>
                            </div>
                            <div className="form-group mb-2">
                                <label for="exampleInputEmail1">Name</label>
                                <input className="form-control my-1" placeholder="Enter your name" type='text' value={name} onChange={(e) => setName(e.value)} />
                            </div>
                            <div className="form-group mb-2">
                                <label>Graduation/Master's College</label>
                                <input className="form-control my-1" placeholder="Enter your Graduation or Maters College Name" type='text' value={collegeName} onChange={(e) => setCollegeName(e.value)} />
                            </div>
                            <div className="form-group mb-4">
                                <label for="exampleInputEmail1">Mobile Number</label>
                                <input className="form-control my-1" placeholder="Enter your mobile number" value={mobileNumber} maxLength={10} type='tel' onChange={(e) => setMobileNumber(e.value)} />
                            </div>
                            <button type="submit" className="btn btn-danger w-100 p-2">Book Now for Free !!</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FrontBanner;
