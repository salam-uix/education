import { faMapMarkedAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="mt-5">
            <div className="footer-container">
                <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="left-container text-start">
                            <h1>Edu-Next</h1>
                            
                            <p className="mt-4 ">
                            <small>
                                A unique Tech-Education provider where one can get all possible tech education, paving the way to
                            </small>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer-menu-container">
                            <h3>Quick Links</h3>
                            <ul className=" align-single-menue-end justify-content-end">
                                <Link to="/home" className="single-menue">
                                <li>Home</li>
                                </Link>
                                <Link to="/services" className="single-menue">
                                <li>Services</li>
                                </Link>
                                <Link to="/about" className="single-menue">
                                <li>About us</li>
                                </Link>
                                <Link to="contact" className="single-menue">
                                <li>Contact us</li>
                                </Link>
                            </ul>    
                        </div>
                    </div>
                    <div className="col-md-5">
                        <h3 className="right-footer-header">Our Location</h3>
                        <div className="right-footer-container">
                            
                            <div className="phone d-flex align-items-center justify-content-center mt-4">
                                
                                <div>
                                    <h5>+1 8 800 555 35 35</h5>
                                </div>
                            </div>
                            <div className="map d-flex align-items-center justify-content-center">
                                
                                <div>
                                    <p>
                                    160 Broadway, New York, NY 10038,
                                    <br /> 102 1st Avenue, New York, NY 100
                                    </p>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                </div>
                <div>
                    <p className="mt-5 text-center">
                        <small>Edu-next © . All rights reserved.</small>
                    </p>
                </div>
            </div>
            
            
        </div>
    );
};

export default Footer;