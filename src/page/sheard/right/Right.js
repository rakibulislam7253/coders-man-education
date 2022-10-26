import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Right = () => {
    const [categories,setcategories]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setcategories(data))
    },[])
    return (
        <div>
            <h4>All course{categories.length}</h4>
            {
                categories.map(category=><p 
                    key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                    
                </p>)
            }
        </div>
    );
};

export default Right;