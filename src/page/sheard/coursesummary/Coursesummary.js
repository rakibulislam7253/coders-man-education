import React from 'react';

import './coursesummary.css'


const Coursesummary = ({ news }) => {

  const { _id, title, total_view, thumbnail_url, image_url, details, author, rating } = news
  return (
 
    <div className='courseitem mt-5'>
      <div class="card mb-3 col-md-12" style={{ width: 'auto' ,height:'auto' }}>
        <div class="row g-0">
          <div class="col-lg-4 col-sm-6 image">
         
            <img src={image_url} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-lg-8 col-sm-6">
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <h6 class="card-text"><small >Rating: {rating.number}</small></h6>
              <h6 class="card-text"><small >Success student: {total_view}</small></h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursesummary; 