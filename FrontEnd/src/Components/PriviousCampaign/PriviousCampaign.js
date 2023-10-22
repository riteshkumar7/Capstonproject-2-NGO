import { useState , useEffect} from 'react';
import slide1 from './slide1.png';
import slide2 from './slide2.png';



const PreviousCampaign = () => {

  const [previousCampaigns, setPreviousCampaigns] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7689/getallpreviousCampaigns')
      .then(response => response.json()) 
      .then(data => {
        setPreviousCampaigns(data); 
      })
      .catch(error => {
        console.log(error);
      });  console.log(previousCampaigns);
  } , [previousCampaigns]);

  return(
    <div className='Mainpriviouscampaigns' style={{marginLeft:"75px",marginRight:"75px",marginTop:"25px"}}>  
    <h1 className='priviouscampaignsheading' style={{fontSize:"60px" ,color: "#263A29",fontFamily: "Times New Roman"}}>Our Privious Campaigns</h1>
      <br />
      <h3 style={{color:"#41644A",textDecorationLine:"underline",fontSize:"25px",fontFamily:"Copperplate"}}>10 Million Lives Touched: Empowering Change Through 12,503 Charity Campaigns in India! </h3> 
      <br/> 


      <div>
        { previousCampaigns.map((temp)=> <div class="card text-bg-dark"  style={{marginTop:"30px", borderRadius:"20px"}}>
  <img src={temp.CampaignImageURL} class="card-img"  style={{opacity: "0.2",height:"300px"}} alt="..."/>
  <div class="card-img-overlay">
    <h5 class="card-title" > <h3 style={{color:"#FFE17B",fontSize:"35px"}}> Campaign : "{temp.CampaignName}"</h3></h5>
    <p class="card-text" style={{fontWeight:"bold",color: "#FFF0F5", marginLeft:"27px", marginRight:"27px",marginTop:"25px",fontSize:"18px"}}> {temp.CampaignInformation}</p><br></br>
    <p class="card-text"><small><button className="btn btn-success" style={{fontFamily: "Times New Roman",fontWeight:"bold", fontSize:"16px"}}>Read More</button></small></p>
  </div>

  
</div>  ) }

        
      
        
        </div>

    </div>
   
    
  );

}

export default PreviousCampaign;