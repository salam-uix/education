import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';
import './Header.css';

const Header = () => {
    return (
      <div className="banner-container ">
          <div className="banner">
            <MenuBar></MenuBar>
            <div className="row">
              <div className="col-md-7 header-slogan">
                <h1 className="title">
                  STEP TO DIGITALIZED</h1>
                <p className="text-white mt-3">
                  Our focused is to guid students for their bright future and our team is vary active to solve study related issue. Stay connected, stay digitalized.
                </p>
                <button className="read-me-btn mt-4">Read More</button>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
      </div>
    );
};

export default Header;