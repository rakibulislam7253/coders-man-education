import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../images/cover/cover-5.jpg';
import image2 from '../../images/cover/cover-6.jpg';
import image3 from '../../images/cover/cover-7.jpg';
import student1 from '../../images/student/student-1.png';
import student2 from '../../images/student/student-2.png';
import student3 from '../../images/student/student-3.png';
import student4 from '../../images/student/student-4.png';
import './home.css';
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <div>
            <Carousel className='mt-5 ' >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 className='text-primary'>Explore your skill</h2>
                        { <p className='text-primary'>Modern and clean logo template in various vector formats - AI, EPS & PSD</p> }
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2 className='text-primary'>Believe in yourself and you will be unstoppable.</h2>

                        <p className='text-primary'>If you’re looking for some Catchy Inspirational Slogans there’s a whole article dedicated</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2 className='text-primary'>Make Sure Your Favorites Course</h2>
                        <p className='text-primary'>
                        Modern and clean logo template in various vector formats - AI, EPS & PSD
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



            <section class="container bg-primary rounded my-5">

                <div class="row  py-5 px-5  ">
                    <div class="col-lg-9 text-lg-start text-md-center text-sm-center">


                        <h1 class="text-white ">Ready to join?</h1>
                        <p class="text-white fs-6 ">It is a long established fact that
                            a reader will be distracted by the
                            readable content of a page when looking at its
                            layout. </p>
                    </div>
                    <div class="col-lg-3 py-5  ">

                        <div class="text-md-center text-sm-center">
                            <button type="button" class="btn btn-light bg-white
                        text-primary fw-bold " data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                                <Link className='reg' to={'/register'}> Registration</Link>
                            </button>
                        </div>

                        <div class="modal fade" id="exampleModal" tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title"
                                            id="exampleModalLabel">Register</h5>
                                        <button type="button" class="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1"
                                                    class="form-label">Email
                                                    address</label>
                                                <input type="email"
                                                    class="form-control"
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp" />
                                                <div id="emailHelp"
                                                    class="form-text">We'll
                                                    never share your email with
                                                    anyone else.</div>
                                            </div>
                                            <div class="mb-3">
                                                <label
                                                    for="exampleInputPassword1"
                                                    class="form-label">Password</label>
                                                <input type="password"
                                                    class="form-control"
                                                    id="exampleInputPassword1" />
                                            </div>
                                            <div class="mb-3 form-check">
                                                <input type="checkbox"
                                                    class="form-check-input"
                                                    id="exampleCheck1" />
                                                <label class="form-check-label"
                                                    for="exampleCheck1">Check me
                                                    out</label>
                                            </div>

                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn
                                            btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn
                                            btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            <section class="container">
                <div class="my-5 text-center">
                    <h1 class="fw-bolder">Meet Our Successfull
                        Students</h1>
                    <p class="text-secondary">It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout.</p>
                </div>


                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 my-3">
                    <div class="col">
                        <div class="card border ">
                            <img src={student1} class="card-img-top" alt="..." />
                            <div class="card-body text-sm-center  text-lg-start text-md-start">
                                <h3>Awlad Hossain</h3>
                                <p class="text-secondary ">UIUX Designer</p>
                            </div>

                        </div>
                    </div>

                    <div class="col">
                        <div class="card border  ">
                            <img src={student2} class="card-img-top" alt="..." />
                            <div class="card-body text-sm-center text-lg-start text-md-start">
                                <h3>Jannatul Islam</h3>
                                <p class="text-secondary">Motion Design</p>

                            </div>

                        </div>
                    </div>

                    <div class="col">
                        <div class="card border ">
                            <img src={student3} class="card-img-top" alt="..." />
                            <div class="card-body text-sm-center text-lg-start text-md-start">
                                <h3>Imran Hossain</h3>
                                <p class="text-secondary">Graphic Designer</p>

                            </div>

                        </div>
                    </div>

                    <div class="col">
                        <div class="card border ">
                            <img src={student4} class="card-img-top" alt="..." />
                            <div class="card-body text-sm-center text-lg-start text-md-start">
                                <h3>Nishi Akter</h3>
                                <p class="text-secondary">Web Developer</p>

                            </div>

                        </div>
                    </div>


                </div>

            </section >
            {/* <Footer></Footer> */}

        </div>
    );
};

export default Home;