import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form, Row } from 'react-bootstrap';
import Footer from '../components/Footer/Footer';
import MenuBar from '../components/MenuBar/MenuBar';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className="contact-container">
            <div className="bg-dark py-4 mb-5">
                <MenuBar></MenuBar>
            </div>
            <div className="img-container">
                <img className="contact-page-img img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcVtht90KIU7mBoP8deMS4RYwv1IK73m04SQ&usqp=CAU" alt="" />
            </div>
            <div className="container contact-container mt-5 mb-5">
                <Row xs={1} md={2} className="g-4">
                    <div>
                        <h1>Get In Touch</h1>
                        <p>If you would like to find out more about how we can help you, please give us a call or drop us an email. We welcome your comments and suggestions about this website and/or any other issues that you wish to raise.</p>
                    </div>
                    <div>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button className="contact-us-btn" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Row>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;