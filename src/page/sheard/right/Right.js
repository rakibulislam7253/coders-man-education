import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './right.css'
const Right = () => {
    const [categories, setcategories] = useState([])
    useEffect(() => {
        fetch('https://coders-man-education-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setcategories(data))
    }, [])
    return (
        <div className='rightpart'>
            <h3 className='text-center'> <u>All courses</u></h3>
            <div className='buttonpart'>
                
                {
                    categories.map(category => <p
                        key={category.id}>
                        <Button variant="primary"> <Link className='btn_link' to={`/category/${category.id}`}>{category.name}</Link></Button>

                    </p>)
                }
            </div>

        </div>
    );
};

export default Right;