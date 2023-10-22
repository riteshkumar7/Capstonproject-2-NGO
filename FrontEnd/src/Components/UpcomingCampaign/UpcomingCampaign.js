import { useEffect, useState } from 'react';
import AdminLogIn from '../Adminconsole/AdminLogIn/AdminLogIn';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'semantic-ui-react'
import axios from 'axios';

const UpcomingCampaign = () => {


  const [upcomingCampaigns, setUpcomingCampaigns] = useState([]);


  useEffect(() => {
    fetch('http://localhost:7689/getallUpcomingCampaign')
      .then(response => response.json()) 
      .then(data => {
        setUpcomingCampaigns(data); 
      })
      .catch(error => {
        console.log(error);
      });  console.log(upcomingCampaigns);
  } , [upcomingCampaigns]);


  const [amount,setAmount]=useState();
  const [name,setName]=useState();
  const [city,setCity]=useState();
  const [state,setState]=useState();

    const donatefunction=(idforUpdate,amounttobeUpdated,currentFuntinfo)=>{
      alert(`  Thank you ${name} for Donating us Rs. ${amount} for Campaign Id ${idforUpdate}.`);
      const updatedAmount = parseInt(currentFuntinfo) + parseInt(amounttobeUpdated);
     
      axios.patch('http://localhost:7689/updateDonationUpcomingCampaign',{
        CampaignID:idforUpdate,
        CurrentFund:updatedAmount
      });
    }
  
  

    
  
  return (

    <div className='Mainupcomingcampaigns' style={{marginLeft:"75px",marginRight:"75px",marginTop:"-70px"}}> 

<h1 className='upcomingcampaignsheading' style={{fontSize:"60px",color: "#263A29",fontFamily: "Times New Roman"}}>Our Upcoming Campaigns</h1>
      <br />
      <h3 style={{color:"#41644A",fontSize:"25px",textDecorationLine:"underline",fontFamily:"Copperplate"}}>Donate To Charity Campaigns Around The World! </h3> 
      <br/> 

      <div className="upcomingcampaigns" style={{ display: "flex", flexWrap: "wrap"}}>
      
      { upcomingCampaigns.length>0 ? (
        upcomingCampaigns.map((campaign) => (
        <div className="card" style={{ width: "18rem", margin: "10px" ,backgroundColor:"#F4D160",borderRadius:"10px"}}>
          <img src={campaign.CampaignImageURL} style={{borderRadius:"10px"}} className="card-img-top" alt="Campaign" />
          <div className="card-body">
            <h5 className="card-title"  style={{fontSize:"20px"}}>{campaign.CampaignName}</h5><hr/>
            <p className="card-text" style={{textAlign:"left",marginLeft: "25px",fontSize:"16px"}}>Campaign Id: {campaign.CampaignID}</p>
            <p className="card-text" style={{textAlign:"left",marginLeft: "25px",fontSize:"16px"}}>Fund Raised: {campaign.CurrentFund}</p>
            <p className="card-text" style={{textAlign:"left",marginLeft: "25px",fontSize:"16px"}}>Fund Required: {campaign.TotalFundRequired}</p>
            <p className="card-text" style={{textAlign:"left",marginLeft: "25px",fontSize:"16px"}}>Expiry Date: {campaign.CampaignDate}</p>
            
            <Modal style={{marginLeft:"250px", height:"600px",backgroundColor:"#F4D160",borderRadius:"20px"}}
  trigger={<Button style={{marginTop:"10px"}} className="btn btn-primary">Donate Now</Button>}
  header={ <div> <h1 style={{marginLeft:"100px",fontSize:"40px",color: "#263A29",fontFamily: "Times New Roman", marginTop:"40px"}} > Thank you for choosing to donate to us. </h1></div>}
  content={
    <div style={{marginLeft:"100px", marginTop:"70px",color: "#263A29",fontFamily: "Times New Roman" }}>
      <h3> Enter Name  : <input type='text' onChange={(e) => setName(e.target.value)} /> </h3>
      <h3> Enter City  : <input type='text' onChange={(e) => setCity(e.target.value)} /> </h3>
      <h3> Enter State  : <input type='text' onChange={(e) => setState(e.target.value)} /> </h3>
      <h3> Enter Amout  : <input type='text' onChange={(e) => setAmount(e.target.value)} /> </h3>
      <br></br><br></br>
    </div>
  }
  actions={[
    'Cancel',
    {
      key: 'done',
      content: 'Donate',
      positive: true,
      onClick: () => donatefunction(campaign.CampaignID,amount,campaign.CurrentFund)
    }
  ]}
/> 

<Modal  style={{marginLeft:"250px", height:"600px",backgroundColor:"#F4D160",borderRadius:"20px"}}
  trigger={<Button style={{marginTop:"10px"}} className="btn btn-primary">Read More</Button>}
  header={ <div> <h1 style={{marginLeft:"30px",fontSize:"60px",color: "#263A29",fontFamily: "Times New Roman"}} > {campaign.campaignName}</h1></div>}
  content={
    <div>
      <h1 style={{marginLeft:"30px",color:"#41644A",fontSize:"25px",textDecorationLine:"underline",fontFamily:"Copperplate"}}> <br></br>About Our Campaign:<br></br> </h1>
      <p style={{margin:"30px", fontSize:"20px",fontFamily: "Times New Roman",fontWeight:"bold" }}> {campaign.CampaignInformation}</p>
    </div>
  }
/>







            
          </div>
        </div>
      )))
          :( <h1 style={{color:"#41644A",fontSize:"25px",fontFamily:"Copperplate", marginLeft:"325px", marginTop:"100px",marginBottom:"100px"}} > There are no upcoming campaigns at the moment.</h1>) 
      } 
      
    </div>
    <br/>
    <Link to="/AdminLogIn"> <button  className="btn btn-dark">Add New Campaign </button></Link>


    </div>

    
  );
}

export default UpcomingCampaign;
