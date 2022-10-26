import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../page/sheard/Hrader/Header';
import Right from '../page/sheard/right/Right';

const Main2 = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='3' >
                        <Right></Right>
                    </Col>
                    <Col lg='9'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Main2;