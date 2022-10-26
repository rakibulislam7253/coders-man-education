import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Categorydetails from '../categorydetails/Categorydetails';

const Category = () => {
    const loader=useLoaderData()
    return (
        <div>
           
            {
                loader.map(detailss => <Categorydetails
                    key={detailss._id}
                    detailss={detailss}
                ></Categorydetails>)
            }
        </div>
    );
};

export default Category;