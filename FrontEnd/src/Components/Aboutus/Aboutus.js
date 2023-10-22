import React, { useState } from 'react';
import NavBar from '../NavSlider/NavBar';
import Footer from '../Footer/Footer';
import Copyright from '../Copyright/Copyright';
import { Card, Icon, Image } from 'semantic-ui-react';
import './Header.css'; // Import your CSS file
import FlipCard from './Flipcard';
import Mission from './Mission';
import './Flipcard.css';
import img1 from './Aboutusimages/photo1.jpg'
import img2 from'./Aboutusimages/image1.jpg'
import img3 from'./Aboutusimages/image2.jpg'
import img4 from'./Aboutusimages/image3.jpg'
import img5 from'./Aboutusimages/image4.jpg'














const aboutus=()=>
{


return(
  <div>
<NavBar/>
<div>
        <img class="bg-image1"
          src="https://shuddhi.org/uploads/3/4/7/9/34791871/cloth-distribution-shuddhi-ngo-india-clidren-women-environment_orig.jpg"
          alt="Responsive image"
          style={{ width: '100%', height: '400px', objectFit: 'cover' }}
        />
      </div>
      <div class="bg-text1">
  <h4>join now</h4>
  <h1>ABOUT US</h1>
</div>
  
  <br/>
  <br/>
  <header>
        <h1 class="vision-heading">Our Vision</h1>
    </header>
    <br/>
    <br/>
    <br/>
    <div className="horizontal-card-container">
  <div className="flip-card">
     <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={img5} alt="Avatar" style={{ width: '300px', height: '300px' }} />
        </div>
        <div className="flip-card-back">
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <p>"Championing women's rights, providing education and economic opportunities to create a brighter, more equitable world."</p>
          
        </div>
      </div>
  </div>
  <div className="flip-card">
     <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={img2} alt="Avatar" style={{ width: '300px', height: '300px' }} />
        </div>
        <div className="flip-card-back">
        <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <p>"Dedicated to providing the elderly with access to healthcare, social support, and a comfortable and dignified life."</p>
        </div>
      </div>
  </div>
  <div className="flip-card">
     <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={img3} alt="Avatar" style={{ width: '300px', height: '300px' }} />
        </div>
        <div className="flip-card-back">
        <br/>
          <br/>
          <br/>
          <br/>
          <p>"Our mission is to break the cycle of poverty through education, giving children the tools to achieve their dreams."</p>
        </div>
      </div>
  </div>
  <div className="flip-card">
     <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={img4} alt="Avatar" style={{ width: '300px', height: '300px' }} />
        </div>
        <div className="flip-card-back">
         <br/>
          <br/>
          <br/>
          <br/>
          <p>"Fighting malnutrition through nutritional support, education, and sustainable solutions for healthier communities."
</p>
        </div>
      </div>
  </div>
</div>


    <br/>
    <br/>
    <br/>
    
    <div>

    <Mission/>
    <h1 class="mission-heading">Our Mission</h1>
    <br/>
    <br/>
    <div className='side'>
    <p>"Our mission at [NGO Name] is deeply rooted in our unwavering commitment to promoting positive change in society, with a primary focus on child and women empowerment,  <span class="bold-and-capital">eradicating malnutrition</span>, providing essential healthcare to the elderly, and facilitating quality education for underprivileged children. We firmly believe that by addressing these key issues, we can build a brighter, more equitable future for all.


<p>In the realm of  <span class="bold-and-capital">women empowerment</span>, we strive to uplift and empower marginalized individuals, ensuring they have the tools and resources to lead fulfilling lives. Through comprehensive programs, we aim to break the cycle of poverty and discrimination, providing education, vocational training, and opportunities for economic self-sufficiency.</p>


<p>Our battle against  <span class="bold-and-capital">eradicating malnutrition</span> is relentless. We work diligently to ensure that no child or adult goes to bed hungry. We provide nutritional support, raise awareness, and advocate for sustainable solutions to combat this pervasive issue.</p>

<p> <span class="bold-and-capital">old age healthcare</span> is a priority for us, as we seek to enhance the quality of life for elderly citizens. We provide healthcare services, social support, and access to essential resources to ensure that our elderly population enjoys their golden years with dignity and care.</p>

<p><span class="bold-and-capital">education</span> is the cornerstone of our mission. We firmly believe that every child deserves access to quality education. We establish schools, offer scholarships, and provide learning resources to empower the future leaders of our society. Our mission encompasses not only educating children but also promoting a sense of responsibility and a commitment to social change.</p>

<p>Through our tireless efforts, we hope to create a world where every child is educated, every woman is empowered, no one goes to bed hungry, and the elderly are respected and cared for. Join us in our journey to make this vision a reality and create a better world for all."</p>
</p>
</div>
<br/>
<br/>
<br/>
    
    </div>
    <br/>
    <Footer/>
    <Copyright/>


  </div>
)



}
export default aboutus
