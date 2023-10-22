import React from 'react';
import './Flipcard.css';
import img1 from './Aboutusimages/photo1.jpg'

function FlipCard() {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={img1} alt="Avatar" style={{ width: '300px', height: '300px' }} />
        </div>
        <div className="flip-card-back">
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;

