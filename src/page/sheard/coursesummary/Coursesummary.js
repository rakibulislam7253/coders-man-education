import React from 'react';
import { FaVideo } from 'react-icons/fa';
import './coursesummary.css'
import video1 from '../../../images/আহারে জীবন.mp4'

const Coursesummary = ({ news }) => {

  const { _id, title, total_view, thumbnail_url, image_url, details, author, rating, video } = news
  return (
  
    <div className='courseitem mt-5'>
      <div class="card mb-3 " style={{ width: '580px' }}>
        <div class="row g-0">
          <div class="col-md-4 image">
            {/* <video src={video1} controls ></video> */}
          {/* <video src={video} class="img-fluid rounded-start" alt="..." ></video> */}
            <img src={image_url} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
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