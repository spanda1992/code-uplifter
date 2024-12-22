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
                    <span className='logo-code'>CODE</span>
                    <span className='logo-uplifter'>UPLIFTER</span>
                </div>
                <div className='navbar-menu-container'>
                    <a href='#features' style={{textDecoration:'none', color:'black'}} className='mx-3 navbar-menu'>Features</a>
                    <a href="#curriculum" style={{textDecoration:'none', color:'black'}} className='mx-3 navbar-menu'>Curriculum</a>
                    <a href="#reviews" style={{textDecoration:'none', color:'black'}} className='mx-3 navbar-menu'>Reviews</a>
                    <a href="#contact" style={{textDecoration:'none', color:'black'}} className='mx-3 navbar-menu'>Contact Us</a>
                </div>
                <div className='navbar-mobile-menu' onClick={() => setShow(true)}>
                    <MdMenu size={25} />
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
                                <span className='mx-3 navbar-menu my-2 pb-1'>Features</span>
                                <span className='mx-3 navbar-menu my-2 pb-1'>Curriculum</span>
                                <span className='mx-3 navbar-menu my-2 pb-1'>Reviews</span>
                                <span className='mx-3 navbar-menu my-2 pb-1'>Contact Us</span>
                            </div>
                        </div>
                    </div>
                </Modal.Dialog>
            </Modal>
        </div>
    );
}

export default Navbar;
