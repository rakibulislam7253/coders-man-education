import React from 'react';
import './header.css'
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from "react-icons/fa";
import logo from '../../../images/company/logo.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Autcontext } from '../../../context/Authprovider/Authprovider';
import Right from '../right/Right';

const Header = () => {
    const { user, logout } = useContext(Autcontext)
    const handellogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className='toppart' >
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <img className='logoimg' src={logo} alt="" srcset="" />
                    <Link className='edtech' to={'/'}><Navbar.Brand className='fs-3' >Online Course</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

    

                        </Nav>
                        <Nav>
                            <Nav.Link > <Link className='textdecoration' to={'/course'}>Course</Link></Nav.Link>
                            <Nav.Link > <Link className='textdecoration' to={'/getpremium'}>Get-Premium</Link></Nav.Link>
                            <Nav.Link > <Link className='textdecoration' to={'/blog'}>Blog</Link></Nav.Link>
                            <Nav.Link > <Link className='textdecoration' to={'/faq'}>Faq</Link></Nav.Link>



                            <Nav.Link eventKey={2} href="#memes">

                                {
                                    user?.uid ?
                                        <>
                                            <img className='rounded-circle image' src={user.photoURL} alt="" title={user.displayName} />
                                            <button onClick={handellogout} className='mx-2 btn btn-outline-primary' >Logout</button>

                                        </>

                                        :
                                        <>
                                            <Link className='textdecoration  mx-2 btn btn-outline-warning' to={'/login'}>Login</Link>
                                            <Link className='textdecoration mx-2  btn btn-outline-warning' to={'/register'}  >Register</Link>
                                            {/* <Button variant="outline-warning"> <Link to={'/login'}>Login</Link> </Button>
                                        <Button variant="outline-warning"> <Link to={'/register'}>Register</Link> </Button> */}
                                            <FaUser></FaUser>
                                            
                                              
                                            
                                        </>

                                }
                                  <label class="switch m-1">
                                                    <input type="checkbox"/>
                                                        <span class="slider round"></span>
                                                </label>
                            </Nav.Link>
                        </Nav>
                        <div className='d-lg-none'>
                            <Right></Right>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;