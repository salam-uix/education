import { faMapMarkedAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
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

                            <p className="mt-5">
                            <small>Edu-next © . All rights reserved.</small>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer-menu-container">
                            
                        </div>
                    </div>
                    <div className="col-md-5">
                        {/* <div className="right-footer-container">
                            <h3>Sign up for the newsletter</h3>
                            <input
                            className="footer-input"
                            type="text"
                            placeholder="Enter Email"
                            />
                            <div className="phone d-flex align-items-center justify-content-center mt-4">
                                <div className="foter-phone-icon">
                                    <FontAwesomeIcon icon={faPhoneVolume} />
                                </div>
                                <div>
                                    <h5>+1 8 800 555 35 35</h5>
                                </div>
                            </div>
                            <div className="map d-flex align-items-center justify-content-center">
                                <div className="foter-phone-icon">
                                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                                </div>
                                <div>
                                    <p>
                                    160 Broadway, New York, NY 10038,
                                    <br /> 102 1st Avenue, New York, NY 100
                                    </p>
                                </div>
                            </div>
                        </div>  */}
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;