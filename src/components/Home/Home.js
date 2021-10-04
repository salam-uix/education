import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Services from '../Services/Services';
import './Home.css'


const Home = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="container text-center mt-5 mb-4 about-course">
                <h1>Welcome To Edu-Next</h1>
                <p className="mb-5">Edu-Next waitin for you to support and make your journey smooth in the soft world with utmost ease.</p>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="left-side me-5 mt-5 mb-5 pe-5">
                        <h2 className="text-start">24/7 Support</h2>
                        <p className="text-start">Edu-Next team wait for students to support 24 houre a day. And they never bother for your question</p>
                        <h2 className="text-start">Private Session</h2>
                        <p className="text-start">As per students need we do arrange private session for single students.</p>
                        <h2 className="text-start">Weekly Assignment</h2>
                        <p className="text-start">To check students improvement we do arrange assignment every week.</p>
                    </div>
                    <div className="right-side flex-1">
                        <img src="https://www.thehighereducationreview.com/newsimagespl/vg4970C1.jpeg" alt="" />
                    </div>
                </div>
            </div>
            <div className="container text-center mt-5 mb-4 about-course">
                <h1>About Our Courses</h1>
                <p className="w-75 mx-auto text-center">Edu-Next is meant for having every individual to have all programming needed and enable everyone to reach his/her dream of enjoying a smooth journey in the soft world with utmost ease. Edu-next is quite committed to support trinee entire his/her workin life.</p>
            </div>
            <div className="container">
                <h2 className="text-center mt-5 mb-4">Explore our services</h2>
                <Row xs={1} md={4} className="g-4">
                    {
                        services.slice(0,4).map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </div>
            
            
            <Footer></Footer>
        </div>
    );
};

export default Home;