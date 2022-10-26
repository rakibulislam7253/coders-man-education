import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Right from '../page/sheard/right/Right';
import Header from '../page/sheard/Hrader/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Outlet></Outlet>
            </Container>


        </div>
    );
};

export default Main;