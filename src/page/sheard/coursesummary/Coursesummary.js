import React from 'react';
import './coursesummary.css'

const Coursesummary = ({ news }) => {
 
  const { _id, title, total_view, thumbnail_url, image_url, details, author, rating } = news
  return (
    <div className='courseitem mt-5'>
      <div class="card mb-3 " style={{ width: '580px' }}>
        <div class="row g-0">
          <div class="col-md-4 image">
            <img src={image_url} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursesummary; 