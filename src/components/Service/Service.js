import React from 'react';
import { Col, Card } from 'react-bootstrap';

const Service = (props) => {
    const { img, title, description} = props.service;
    
    return (
        <div>
            <Col>
                <Card className="edu-card">
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="edu-card-body">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;