import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import './About.css'

const About = () => {
    return (
        <div>
            <div className="bg-dark py-4 mb-5">
                <MenuBar></MenuBar>
            </div>
            <img src="https://www.bkacontent.com/wp-content/uploads/2020/06/about-us.jpg" alt="" />
            <div className="container mt-5 mb-5">
                <h1>We are Edu-Next</h1>
                <p>Edu-next ventured its journey with a mission to provide expert for software, ecommrce, website and mobile application solutions from a single and unique platform. It aims to ensure best quality education with minimum budget. Edu-next with its vast experience in onine education feild. We are committed to our stakeholders to make it happen that solutions to their problems will be at their finger tips. We urge our clients (partners of Edu-next) to come with their enterprise and ideas; we are here awaiting them with the latest knack of technology to get their ideas actualized. Edu-next does have a strong motivated and dedicated team of tech-specialists who are always on their toe to wait on its clients. Edu-next believes in offering values to its customers. We also ensure best approaches in our development which meet your demand and strategy.</p>
                <br />
                <button className="contact-us-btn mt-4">Contact Us</button>
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;