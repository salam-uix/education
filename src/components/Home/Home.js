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
    console.log(services.description)
    return (
        <div>
            <Header></Header>
            <div className="container">
                <h2 className="text-center mt-5 mb-4">Our Services</h2>
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