import React from 'react';
import './header.css'
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from "react-icons/fa";

import {useState} from 'react';
import { Link } from 'react-router-dom';
import { Autcontext } from '../../../context/Authprovider/Authprovider';
const Header = () => {




    const { user, logout } = useContext(Autcontext)
    const handellogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to={'/'}><Navbar.Brand >React-Bootstrap</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            {/* <Nav.Link > <Link to={'/course'}>Course</Link></Nav.Link>
                            <Nav.Link > <Link to={'/getpremium'}>Get-Premium</Link></Nav.Link>
                            <Nav.Link > <Link to={'/blog'}>Blog</Link></Nav.Link>
                            <Nav.Link > <Link to={'/faq'}>Faq</Link></Nav.Link> */}


                        </Nav>
                        <Nav>
                            <Nav.Link > <Link to={'/course'}>Course</Link></Nav.Link>
                            <Nav.Link > <Link to={'/getpremium'}>Get-Premium</Link></Nav.Link>
                            <Nav.Link > <Link to={'/blog'}>Blog</Link></Nav.Link>
                            <Nav.Link > <Link to={'/faq'}>Faq</Link></Nav.Link>
                           
                            
                        
                            <Nav.Link eventKey={2} href="#memes">

                                {
                                    user?.uid ?
                                    <> 
                                    {/* <img className='rounded-circle image' src={user.photoURL} alt="" title={user.displayName} /> */}
                                    <button onClick={handellogout} >Logout</button>
                                   
                                    </>
                                      
                                        :
                                        <>
                                        <Link to={'/login'}>Login</Link>
                                        <Link to={'/register'} className='mx-2' >Register</Link> 
                                        {/* <Button variant="outline-warning"> <Link to={'/login'}>Login</Link> </Button>
                                        <Button variant="outline-warning"> <Link to={'/register'}>Register</Link> </Button> */}
                                        <FaUser></FaUser>
                                        </>
                                        
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;