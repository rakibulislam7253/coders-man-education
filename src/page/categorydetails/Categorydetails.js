import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Categorydetails = ({ detailss }) => {
    const { image_url, details, title, Price } = detailss
    // console.log(details)
    return (
        <div>
            <Card style={{ width: '36rem' }} className='m-5' >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>{details}</li>
                        </ul>
                        

                    </Card.Text>
                <h5>Price:{Price}</h5>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Categorydetails;