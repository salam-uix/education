import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MenuBar from '../MenuBar/MenuBar';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        
        <div>
            <div className="bg-dark py-4 mb-5">
                <MenuBar></MenuBar>
            </div>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)

                }
            </Row>
            <Footer></Footer>
        </div>
    );
};

export default Services;