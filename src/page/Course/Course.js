import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Coursesummary from '../sheard/coursesummary/Coursesummary';

const Course = () => {
    const allnews = useLoaderData()
    return (
        <div>

         
            {
                allnews.map(news => <Coursesummary
                    key={news._id}
                   news={news}
                ></Coursesummary>)
            }
        </div>
    );
};

export default Course;