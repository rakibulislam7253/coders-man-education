import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../images/cover/cover-1.png';
import image2 from '../../images/cover/cover-2.jpg'
import image3 from '../../images/cover/cover-3.jpg'
import image11 from '../../images/course/course-1.png'
import image22 from '../../images/course/course-2.png' 
import image33 from '../../images/course/course-3.png' 

// import image2 from '../../images/cover/cover-2.png';
// import image3 from '../../images/cover/cover-3.png';
const Home = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <section class="container">

                <div class="mt-5 pt-5">
                    <div class="text-center mt-5">
                        <div  >
                            <h1>Discover Our Popular</h1>
                            <h1 >Courses</h1>
                        </div>

                        <p class="text-center text-secondary">It is a long established fact that a reader will be
                            distracted by the readable content of a page when looking at its layout. </p>
                    </div>
                    <div class="mt-5">
                        <div class="row">

                            <div class="col-lg-6 col-sm-12">
                                <div class="card mb-3" style={{width: '510px' }}>
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={image11}
                                                class="img-fluid rounded-start w-100"
                                                alt="..." />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h4 class="card-title">Javascript
                                                    Basic to advanced</h4>
                                                <p class="card-text text-secondary">Some quick
                                                    example text to build on the
                                                    card title and make up the bulk
                                                    of the card.</p>
                                                <p class="card-text text-primary
                                    fw-bold"> price:20$</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-sm-12">
                                <div class="card mb-3" style={{ width: '510px' }}>
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={image22}
                                                class="img-fluid rounded-start
                                w-100"
                                                alt="..." />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h4 class="card-title">Javascript
                                                    Basic to advanced</h4>
                                                <p class="card-text text-secondary">Some quick
                                                    example text to build on the
                                                    card title and make up the bulk
                                                    of the card.</p>
                                                <p class="card-text text-primary
                                    fw-bold"> price:20$</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-sm-12">
                                <div class="card mb-3" style={{ width: '510px' }}>
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={image33}
                                                class="img-fluid rounded-start
                                w-100"
                                                alt="..." />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h4 class="card-title">Fullstack Web
                                                    Development</h4>
                                                <p class="card-text text-secondary">Some quick
                                                    example text to build on the
                                                    card title and make up the bulk
                                                    of the card.</p>
                                                <p class="card-text text-primary
                                    fw-bold"> price:20$</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    {/* <div class="d-flex justify-content-center py-4 ">
                        <button class="btn btn-outline-info btn btn-info text-white
            pe-4 py-2 ps-4
            btn-outline-primary fw-bolded fs-5 ;"
                            type="submit">See More Courses</button>
                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default Home;