import React from 'react';
import './FrontBanner.css'

const FrontBanner = () => {
    const [mobileNumber, setMobileNumber] = React.useState('')
    const [name, setName] = React.useState('')

    return (
        <div className='front-banner-container'>
            <div className='container py-5'>
                <div className='font-banner-content'>
                    <div className=''>
                        <div>
                            <span style={{ fontWeight: 600, fontSize: '2rem', color: 'white' }}>
                                We Help You to pursue your Dream Career in IT
                            </span>
                            <br /> <br /> <br />
                            <span style={{ fontWeight: 500, fontSize: '1rem', color: 'white' }}>
                                We are based at Bhubaneswar. Come and explore with us !!
                            </span>
                        </div>
                        <div className='my-4'>
                            <button style={{width: '45%'}} className='btn btn-success me-2 py-2'>Call Us</button>
                            <button style={{width: '45%'}} className='btn btn-primary bg-white py-2 text-primary'>Explore Academy</button>
                        </div>
                    </div>
                    <div className='bg-white frontpage-banner-form'>
                        <form>
                            <div className='d-flex justify-content-center'>
                                <h4>Book For a Live Class !!</h4>
                            </div>
                            <div className="form-group mb-2">
                                <label for="exampleInputEmail1">Name</label>
                                <input className="form-control my-1" placeholder="Enter your name" type='text' value={name} onChange={(e) => setName(e.value)} />
                            </div>
                            <div className="form-group mb-4">
                                <label for="exampleInputEmail1">Mobile Number</label>
                                <input className="form-control my-1" placeholder="Enter your mobile number" value={mobileNumber} maxLength={10} type='numeric' onChange={(e) => setMobileNumber(e.value)} />
                            </div>
                            <button type="submit" className="btn btn-danger">Book Now for Free !!</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FrontBanner;
