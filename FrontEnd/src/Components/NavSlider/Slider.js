import slide1 from './slide1.gif';
import slide2 from './slide2.gif';
import slide3 from './slide3.gif';
import slide4 from './slide4.gif';


const Slider=()=>{
    return(
        <div className="mainSlider" style={{height:"600px", marginRight:"50px",marginLeft:"50px", marginTop:"40px" }}>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
  <div class="carousel-indicators" >
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
       <img src={slide1} class="d-block w-100" alt="...." style={{opacity: "0.9",borderRadius:"30px"}}/>
      <div class="carousel-caption d-none d-md-block" style={{marginBottom:"60px"}} >
        <h1  style={{fontSize:"50px",fontWeight:"bold", fontFamily: "Times New Roman",color:"#F4D160",textShadow:"4px 4px 12px black"}}>CHILD EDUCATION</h1>
        <p style={{fontSize:"20px"}}>"Education is the key to unlock a child's potential and pave the way for a brighter and more promising future."</p>
        <button type="button" class="btn btn-success" style={{fontFamily: "Times New Roman",fontWeight:"bold", fontSize:"16px"}} >DONATE NOW</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={slide2} class="d-block w-100" alt="...."style={{opacity: "0.9",borderRadius:"30px"}}/>
      <div class="carousel-caption d-none d-md-block" style={{marginBottom:"60px"}}>
        <h1  style={{fontSize:"50px",fontWeight:"bold", fontFamily: "Times New Roman",color:"#F4D160",textShadow:"4px 4px 12px black"}} >MALNUTRITION</h1>
         <p style={{fontSize:"20px"}}>"Ending malnutrition is essential for ensuring healthy and thriving communities."</p>
         <button type="button" class="btn btn-success" style={{fontFamily: "Times New Roman",fontWeight:"bold", fontSize:"16px"}} >DONATE NOW</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={slide3} class="d-block w-100" alt="...." style={{opacity: "0.9",borderRadius:"30px"}}/>
      <div class="carousel-caption d-none d-md-block" style={{marginBottom:"60px"}}>
      <h1  style={{fontSize:"50px",fontWeight:"bold", fontFamily: "Times New Roman",color:"#F4D160",textShadow:"4px 4px 12px black"}}>WOMEN EMPOWERMENT</h1>
      <p style={{fontSize:"20px"}}>"Empowering women leads to a stronger and more inclusive society."</p>
      <button type="button" class="btn btn-success" style={{fontFamily: "Times New Roman",fontWeight:"bold", fontSize:"16px"}} >DONATE NOW</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={slide4} class="d-block w-100" alt="...."style={{opacity: "0.9",borderRadius:"30px"}}/>
      <div class="carousel-caption d-none d-md-block" style={{marginBottom:"60px"}}>
        <h1  style={{fontSize:"50px",fontWeight:"bold", fontFamily: "Times New Roman",color:"#F4D160",textShadow:"4px 4px 12px black"}}>OLD AGE HEALTHCARE</h1>
        <p style={{fontSize:"20px"}}>"Ensuring the health and dignity of our elderly for a compassionate society."</p> 
        <button type="button" class="btn btn-success" style={{fontFamily: "Times New Roman", fontSize:"16px", fontWeight:"bold"}} >DONATE NOW</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true" ></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            
             </div>
    );
}

export default Slider;