import React from 'react';
import './blog.css'
const Blog = () => {
    return (
        <div className='blogbody'>
            <div className='blog '>
                <div>
                    <h3>What is CORS ?</h3>
                </div>
                <div>
                    <p>Ans:In ReactJS, Cross-Origin Resource Sharing (CORS) refers to the method that allows you to make requests
                        to the server deployed at a different domain.The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. Modern browsers use CORS in APIs such as XMLHttpRequest or
                        Fetch to mitigate the risks of cross-origin HTTP requests
                    </p>
                </div>
            </div>



            <div className='blog'>
                <div>
                    <h3>Why are you using firebase?What other options do you have to implement authentication? </h3>
                </div>
                <div>
                    <p>
                        Ans: The Firebase Realtime Database lets you build rich, collaborative applications by
                        allowing secure access to the database directly from client-side code.I will use because of the bellow reason
                        <ul>
                            <li>Cloud Messaging for Cross-Platform Apps.</li>
                            <li>Higher Website Traffic with App Indexing.</li>
                            <li>Swift and Secured Web Hosting.</li>
                            <li>Higher Accessibility to Machine Learning APIs.</li>
                            <li>Crash Reporting for Swift Bugs Fixing.</li>
                            <li>Optimized App Performance.</li>
                        </ul>

                        Other options are:Auth0, MongoDB, Passport, Okta, and Firebase are the most popular
                        alternatives and competitors to Firebase Authentication.
                    </p>
                </div>
            </div>

            <div className='blog'>
                <div>
                    <h3>How does the private route work?</h3>
                </div>
                <div>
                    <p>
                        Ans:The private route component is used to protect selected pages in a React app
                        from unauthenticated users.Private Routes vary based on the Apps, For example, Dashboard,
                        User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.
                        The constraints for Public and Private routes are that Public routes should not be accessed after
                        login and Private routes should not be accessible before login.
                    </p>
                </div>
            </div>


            <div className='blog'>
                <div>
                    <h3>What is node?How does node work?</h3>
                </div>
                <div>
                    <p> Node allows developers to write JavaScript code that runs directly in a
                        computer process itself instead of in a browser.Node.js accepts the request
                        from the clients and sends the response, while working with the request node.js handles
                        them with a single thread. To operate I/O operations or requests node.js use the concept
                        of threads. Thread is a sequence of instructions that the server needs to perform. It runs
                        parallel on the server to provide the information to multiple clients. Node.js is an event loop
                        single-threaded language. It can handle concurrent requests with a single thread without blocking
                        it for one request.
                    </p></div>
            </div>



        </div>
    );
};

export default Blog;