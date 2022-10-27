import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../page/sheard/footer/Footer';
import Header from '../page/sheard/Hrader/Header';
import Right from '../page/sheard/right/Right';

const Main2 = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='4' className='d-none d-lg-block' >
                        <Right></Right>
                    </Col>
                    <Col lg='8'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>

        </div>
    );
};

export default Main2;