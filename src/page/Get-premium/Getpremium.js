import React from 'react';
import './get.css';
import video1 from '../../images/video/07 Behavior Patterns- 01 The Observer Pattern.mp4';
import video2 from '../../images/video/Introduction to Databases, SQL, & MySQL.mp4';
import video3 from '../../images/video/Introduction To Node.js .mp4';
import video4 from '../../images/video/Javascript Introduction - Lecture 1 - Web Development Course.mp4';
import video5 from '../../images/video/Microsoft Azure Services Overview - Microsoft Azure Services Tutorial - Azure Training - Simplilearn.mp4';
import video6 from '../../images/video/What is UI vs. UX Design- A Practical Example in Under 6 Minutes.mp4';
const Getpremium = () => {
    return (
        <div>
            <h2 className='text-center textonline'><u>Online Demo Video Lecture</u> </h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 my-5 p-4">
                <div className="col">
                    <div className="card ">
                        <video src={video1} controls className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">Demo Javascript Lecture</h4>
                            <p className="card-text">our respective teacher peterson shows the basic javascript lecture.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card ">
                        <video src={video2} controls className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h4 className="card-title">Demo Python Lecture</h4>
                            <p className="card-text">our respective teacher peterson shows the basic Python lecture.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card ">
                        <video src={video3} controls className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h4 className="card-title">Demo MySQL Lecture</h4>
                            <p className="card-text">our respective teacher peterson shows the basic MySQL lecture.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card ">
                        <video src={video4} controls className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h4 className="card-title">Demo Node js Lecture</h4>
                            <p className="card-text">our respective teacher peterson shows the basic Node js lecture.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card ">
                        <video src={video5} controls className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h4 className="card-title">Demo Microsoft Lecture</h4>
                            <p className="card-text">our respective teacher peterson shows the basic Microsoft lecture.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card ">
                        <video src={video6} controls className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h4 className="card-title">Demo Express js Lecture</h4>
                            <p className="card-text">our respective teacher peterson shows the basic Express js lecture.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Getpremium;