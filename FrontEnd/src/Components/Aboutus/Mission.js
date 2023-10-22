import React from 'react';
import './Mission.css'; // Import the CSS for styling
import img2 from './Aboutusimages/photo2.png'
import img3 from './Aboutusimages/photo3.jpg'
import img5 from './Aboutusimages/photo5.jpg'
import img4 from './Aboutusimages/logo2.jpg'
import img6 from './Aboutusimages/photo6.png'

function Mission() {
  return (
    <div className="righthand">
    <div className="image-layout">
      <div className="image">
        <img src={img2} alt="Image 1" />
        <div className="image-overlay"></div>
      </div>
      <div className="image-row">
        <div className="image">
          <img src={img3} alt="Image 2" />
          <div className="image-overlay"></div>
        </div>
        <div className="image">
          <img src={img4} alt="Image 3" />
          <div className="image-overlay"></div>
        </div>
        <div className="image">
          <img src={img5} alt="Image 4" />
          <div className="image-overlay"></div>
        </div>
      </div>
      <div className="image">
        <img src={img6} alt="Image 5" />
        <div className="image-overlay"></div>
      </div>
    </div>
    </div>
  );
}

export default Mission;
