import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css'
const MenuBar = () => {
    return (
        <div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="logo">
              <h1>Edu-Next</h1>
            </div>
          </div>
          <div className="col-md-9">
            <div className="menu-container ">
              <ul className="d-flex align-single-menue-end justify-content-end">
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
        </div>
      </div>
    </div>
    );
};

export default MenuBar;