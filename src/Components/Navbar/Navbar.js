import React from 'react';
import './Navbar.css'
import { MdMenu } from "react-icons/md";
import Modal from 'react-bootstrap/Modal';


const Navbar = () => {
    const [show, setShow] = React.useState(false);

    return (
        <div className='navbar-container bg-white py-1'>
            <div className='d-flex container justify-content-between'>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <span style={{ fontWeight: '700', fontSize: 25, color: '#6700A3', lineHeight: '30px' }}>CODE</span>
                    <span style={{ fontWeight: '500', fontSize: 16, color: '#6700A3', lineHeight: '20px' }}>UPLIFTER</span>
                </div>
                <div className='navbar-menu-container'>
                    <span className='mx-3 navbar-menu'>Curriculum</span>
                    <span className='mx-3 navbar-menu'>Reviews</span>
                    <span className='mx-3 navbar-menu'>Teaching</span>
                    <span className='mx-3 navbar-menu'>Mentorship</span>
                    <span className='mx-3 navbar-menu'>Community</span>
                    <span className='mx-3 navbar-menu'>Careers</span>
                    <span className='mx-3 navbar-menu'>FAQs</span>
                </div>
                <div className='navbar-mobile-menu' onClick={() => setShow(true)}>
                    <MdMenu size={35} />
                </div>
            </div>
            <Modal
                dialogClassName='menu'
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Dialog>
                    <div>
                        <div style={{
                            borderBottom: '1px solid black  '
                        }} className='d-flex justify-content-center'>
                            <h3 className='text-dark'>Welcome</h3>
                        </div>
                        <div className='px-2 my-4'>
                            <div className='d-flex flex-column'>
                                <span className='mx-3 navbar-menu my-3 pb-1 h3'>Curriculum</span>
                                <span className='mx-3 navbar-menu my-3 pb-1 h3'>Reviews</span>
                                <span className='mx-3 navbar-menu my-3 pb-1 h3'>Teaching</span>
                                <span className='mx-3 navbar-menu my-3 pb-1 h3'>Mentorship</span>
                                <span className='mx-3 navbar-menu my-3 pb-1 h3'>Community</span>
                                <span className='mx-3 navbar-menu my-3 pb-1 h3'>Careers</span>
                                <span className='mx-3 navbar-menu my-3 pb-1 h3'>FAQs</span>
                            </div>
                        </div>
                    </div>
                </Modal.Dialog>
            </Modal>
        </div>
    );
}

export default Navbar;
