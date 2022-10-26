import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Right from '../page/sheard/right/Right';
import Header from '../page/sheard/Hrader/Header';
import Footer from '../page/sheard/footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Outlet></Outlet>
            </Container>
            <Footer></Footer>

        </div>
    );
};

export default Main;