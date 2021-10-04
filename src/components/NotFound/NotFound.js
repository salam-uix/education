import React from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <div className="bg-dark py-4 mb-5">
                <MenuBar></MenuBar>
            </div>
            <div className="container notfound-container mb-5">
                <Row xs={1} md={2} className="g-4">
                    <div className="left w-50">
                        <h1 className="four-zero-four text-certer">404</h1>
                        <h3 className="text-center not-found-tex">The page you are looking for <br /> couldn't be found</h3>
                    </div>
                    <div className="right">
                        <img className="img-fluid" src="https://images.unsplash.com/photo-1480985041486-c65b20c01d1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1476&q=80" alt="" />
                    </div>
                </Row>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;