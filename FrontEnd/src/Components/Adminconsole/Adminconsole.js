import NavBar from '../NavSlider/NavBar';
import adminbg from './adminbg.png';
import { Icon } from 'semantic-ui-react';
import Footer from '../Footer/Footer';
import Copyright from '../Copyright/Copyright';
import { Button, Header,  Modal } from 'semantic-ui-react';
import React, { useState } from 'react';
import axios from 'axios';


const Adminconsole=()=>{
  const [open1, setOpen1] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  let [campaignId,setCampaignId]=useState();
  let [campaignName,setCampaignName]=useState();
  let [currentFund,setCurrentFund]=useState();
  let [requiredFund,setRequiredFund]=useState();
  let [campaignDate,setCampaignDate]=useState();
  let [imgUrl,setImgUrl]=useState();
  let [moreinfo,setMoreInfo]=useState();

  let[previousCampaignsId,setpriviousCampaignId]=useState();
  let[priviouscampaignName,setpriviousCampaignName]=useState();
  let[priviouscampaignImgurl,setpriviousCampaignImgurl]=useState();
  let[priviouscampaignInfo,setpriviousCampaignInfo]=useState();

  

  const addCampaigntolist=()=>{
    axios.post('http://localhost:7689/addnewUpcomingCampaign',{
      CampaignID:campaignId,
      CampaignName:campaignName,
      CurrentFund:currentFund,
      TotalFundRequired:requiredFund,
      CampaignDate:campaignDate,
      CampaignImageURL:imgUrl,
      CampaignInformation:moreinfo
        });
        alert("New Upcoming Campaign Added...");
        setOpen1(false);
  }

  let [CampaignIdDelete,setCampaignIdDelete]=useState();

  const removeCampaign=(CampaignIdDelete)=>{
      
    axios.delete(`http://localhost:7689/deleteUpcomingCampaign/${CampaignIdDelete}`);
    alert(`Campaign having an id : ${CampaignIdDelete} is deleted...`)
    setOpen(false);

  }

  const addpriviousCampaigntoDB=()=>{
    alert("Privious Campaign Added ...");
    setOpen2(false);
    axios.post('http://localhost:7689/addnewpriviousCampaign',{
      CampaignID:previousCampaignsId,
      CampaignName:priviouscampaignName,
      CampaignImageURL:priviouscampaignImgurl,
      CampaignInformation:priviouscampaignInfo
    })
    
  }

  const updateCampaigninformation=()=>{
    axios.patch('http://localhost:7689/updatenewUpcomingCampaign',{
      CampaignID:campaignId,
      CampaignName:campaignName,
      CurrentFund:currentFund,
      TotalFundRequired:requiredFund,
      CampaignDate:campaignDate,
      CampaignImageURL:imgUrl,
      CampaignInformation:moreinfo
        });
        alert("New Upcoming Campaign Updated...");
        setOpen3(false);
  }


  const updatepriviousCampaigntoDB=()=>{
    alert("Privious Campaign Updated ...");
    setOpen4(false);
    axios.patch('http://localhost:7689/updatePriviousCampaign',{
      CampaignID:previousCampaignsId,
      CampaignName:priviouscampaignName,
      CampaignImageURL:priviouscampaignImgurl,
      CampaignInformation:priviouscampaignInfo
    })
    
  }

 
    return(
      
        <div className="mainAdminconsole">
        <NavBar/>

            <img src={adminbg} style={{width:"100%", height:"400px"}}/> 
            <br/> <br/> <br/> <br/> <br/> <br/>

            <div className='adminrights' style={{marginLeft:"8%",marginRight:"8%"}}>
            <h1 className='priviouscampaignsheading' style={{fontSize:"60px" ,color: "#263A29",fontFamily: "Times New Roman"}}>Admin Rights</h1>
      
      <h3 style={{color:"#41644A",textDecorationLine:"underline",fontSize:"25px",fontFamily:"Copperplate"}}>admin rights to create, manage, and edit both upcoming and previous campaigns, fostering seamless engagement and impactful initiatives. </h3> 
      <br/> <br/> <br/> 


    <div class="row">
                <div class="col-2">
    
    <div id="list-example" class="list-group">
    

 {/* add upcoming Campaigns             */}

 <div>
            <Modal style={{ borderRadius: "20px", height: "500px", marginLeft: "230px", marginTop: "100px", backgroundColor: "#F4D160" }}
  closeIcon
  open={open1}
  trigger={
    <button> <a style={{ backgroundColor: "#263A29", fontWeight: "bold", color: "#E7B10A", fontFamily: "Times New Roman", fontSize: "17px" }} class="list-group-item list-group-item-action" href="#list-item-2">Add New Campaign </a></button>
  }
  onClose={() => setOpen1(false)}
  onOpen={() => setOpen1(true)}
>
  <Header style={{ marginLeft: "100px", fontSize: "40px", color: "#263A29", fontFamily: "Times New Roman", marginTop: "40px" }}
    icon="clipboard outline"
    content="Please fill the following details."
  />
  <Modal.Content >
    <h1 style={{ marginLeft: "100px", marginTop: "40px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Campaign ID : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter Campaign ID here"
      onChange={(e)=> setCampaignId(e.target.value)}
    /></h1>
    <h1 style={{ marginLeft: "100px", marginTop: "40px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Campaign Name : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter Campaign Name here"
      onChange={(e)=>setCampaignName(e.target.value)}
    /></h1>
    <h1 style={{ marginLeft: "100px", marginTop: "40px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Current Fund : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter Current Fund here"
      onChange={(e)=> setCurrentFund(e.target.value)}
    /></h1>
    <h1 style={{ marginLeft: "100px", marginTop: "40px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Total Require Fund : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter Total Require Fund here"
      onChange={(e)=> setRequiredFund(e.target.value)}
    /></h1>
    <h1 style={{ marginLeft: "100px", marginTop: "40px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Campaign Date : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter Campaign Date here"
      onChange={(e)=> setCampaignDate(e.target.value)}
    /></h1>
    <h1 style={{ marginLeft: "100px", marginTop: "40px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Campaign Img Url : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter Campaign Img Url here"
      onChange={(e)=> setImgUrl(e.target.value)}
    /></h1>
    <h1 style={{ marginLeft: "100px", marginTop: "40px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Campaign Info : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter Campaign Info here"
      onChange={(e)=> setMoreInfo(e.target.value)}
    /></h1>
  </Modal.Content>
  <Modal.Actions style={{ marginRight: "300px" }}>
    <Button color="red" onClick={() => setOpen1(false)}>
      <Icon name="remove" /> Cancel
    </Button>
    <Button color="green" onClick={ addCampaigntolist }>
      <Icon name="checkmark" /> Add Campaign
    </Button>
  </Modal.Actions>
</Modal>

            
             
            </div> <br></br>

{/* Detele Upcoming Campaign  */}



            <div > 
            <Modal style={{ borderRadius: "20px", height: "500px", marginLeft: "230px", marginTop: "100px", backgroundColor: "#F4D160" }}
  closeIcon
  open={open}
  trigger={
    <button> <a style={{ backgroundColor: "#263A29", fontWeight: "bold", color: "#E7B10A", fontFamily: "Times New Roman", fontSize: "17px" }} class="list-group-item list-group-item-action" href="#list-item-2">Delete Campaign </a></button>
  }
  onClose={() => setOpen(false)}
  onOpen={() => setOpen(true)}
>
  <Header style={{ marginLeft: "100px", fontSize: "40px", color: "#263A29", fontFamily: "Times New Roman", marginTop: "40px" }}
    icon="clipboard outline"
    content="Please fill the following details."
  />
  <Modal.Content >
    <h1 style={{ marginLeft: "100px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Campaign ID : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter Campaign ID here"
      onChange={(e) => setCampaignIdDelete(e.target.value)}
    /></h1>
  </Modal.Content>
  <Modal.Actions style={{ marginRight: "300px" }}>
    <Button color="red" onClick={() => setOpen(false)}>
      <Icon name="remove" /> Cancel
    </Button>
    <Button color="green" onClick={() => removeCampaign(CampaignIdDelete) }>
      <Icon name="checkmark" /> Delete
    </Button>
  </Modal.Actions>
</Modal>

            
             
            </div> <br></br>

{/* add Privious Campaign */}

            <div>
            <Modal style={{ borderRadius: "20px", height: "500px", marginLeft: "230px", marginTop: "100px", backgroundColor: "#F4D160" }}
  closeIcon
  open={open2}
  trigger={
    <button> <a style={{ backgroundColor: "#263A29", fontWeight: "bold", color: "#E7B10A", fontFamily: "Times New Roman", fontSize: "17px" }} class="list-group-item list-group-item-action" href="#list-item-2">Add Previous Campaign Details ...</a></button>
  }
  onClose={() => setOpen2(false)}
  onOpen={() => setOpen2(true)}
>
  <Header style={{ marginLeft: "100px", fontSize: "40px", color: "#263A29", fontFamily: "Times New Roman", marginTop: "40px" }}
    icon="clipboard outline"
    content="Please fill the following details."
  />
  <Modal.Content >
    <h1 style={{ marginLeft: "100px", marginTop: "40px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Campaign ID : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter Campaign ID here"
      onChange={(e) => setpriviousCampaignId(e.target.value)}
    /></h1> 
    <h1 style={{ marginLeft: "100px", marginTop: "40px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Campaign Name : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter Campaign ID here"
      onChange={(e) => setpriviousCampaignName(e.target.value)}
    /></h1> 
    <h1 style={{ marginLeft: "100px", marginTop: "40px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Campaign Img Url : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter Campaign ID here"
      onChange={(e) => setpriviousCampaignImgurl(e.target.value)}
    /></h1> 
    <h1 style={{ marginLeft: "100px", marginTop: "40px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Campaign Info : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter Campaign ID here"
      onChange={(e) => setpriviousCampaignInfo(e.target.value)}
    /></h1> 
  </Modal.Content>
  <Modal.Actions style={{ marginRight: "300px" }}>
    <Button color="red" onClick={() => setOpen2(false)}>
      <Icon name="remove" /> Cancel
    </Button>
    <Button color="green" onClick={addpriviousCampaigntoDB}>
      <Icon name="checkmark" /> Add Privious Campaign
    </Button>
  </Modal.Actions>
</Modal>

            
        
     
              
            </div> <br></br>


            {/* Modify Upcoming Compain */}

            <div>
            <Modal style={{ borderRadius: "20px", height: "500px", marginLeft: "230px", marginTop: "100px", backgroundColor: "#F4D160" }}
  closeIcon
  open={open3}
  trigger={
    <button> <a style={{ backgroundColor: "#263A29", fontWeight: "bold", color: "#E7B10A", fontFamily: "Times New Roman", fontSize: "17px" }} class="list-group-item list-group-item-action" href="#list-item-2">Modified Upcoming Campaign Details </a></button>
  }
  onClose={() => setOpen3(false)}
  onOpen={() => setOpen3(true)}
>
  <Header style={{ marginLeft: "100px", fontSize: "40px", color: "#263A29", fontFamily: "Times New Roman", marginTop: "40px" }}
    icon="clipboard outline"
    content="Please fill the Updated Information with a proper Campaign ID  "
  />
  <Modal.Content >
    <h1 style={{ marginLeft: "100px", marginTop: "40px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Campaign ID  : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter Campaign ID here"
      onChange={(e)=> setCampaignId(e.target.value)}
    /></h1>
    <h1 style={{ marginLeft: "100px", marginTop: "40px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Updated Campaign Name : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter Campaign Name here"
      onChange={(e)=>setCampaignName(e.target.value)}
    /></h1>
    <h1 style={{ marginLeft: "100px", marginTop: "40px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Updated Current Fund : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter Current Fund here"
      onChange={(e)=> setCurrentFund(e.target.value)}
    /></h1>
    <h1 style={{ marginLeft: "100px", marginTop: "40px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Updated Total Require Fund : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter Total Require Fund here"
      onChange={(e)=> setRequiredFund(e.target.value)}
    /></h1>
    <h1 style={{ marginLeft: "100px", marginTop: "40px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Updated Campaign Date : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter Campaign Date here"
      onChange={(e)=> setCampaignDate(e.target.value)}
    /></h1>
    <h1 style={{ marginLeft: "100px", marginTop: "40px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Campaign Img Url : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter Campaign Img Url here"
      onChange={(e)=> setImgUrl(e.target.value)}
    /></h1>
    <h1 style={{ marginLeft: "100px", marginTop: "40px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Updated Campaign Info : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter Campaign Info here"
      onChange={(e)=> setMoreInfo(e.target.value)}
    /></h1>
  </Modal.Content>
  <Modal.Actions style={{ marginRight: "300px" }}>
    <Button color="red" onClick={() => setOpen3(false)}>
      <Icon name="remove" /> Cancel
    </Button>
    <Button color="green" onClick={ updateCampaigninformation }>
      <Icon name="checkmark" /> Update Campaign Information
    </Button>
  </Modal.Actions>
</Modal>

            
             
            </div> <br></br>

            {/* Update Privious Campaign */}

            <div>
            <Modal style={{ borderRadius: "20px", height: "500px", marginLeft: "230px", marginTop: "100px", backgroundColor: "#F4D160" }}
  closeIcon
  open={open4}
  trigger={
    <button> <a style={{ backgroundColor: "#263A29", fontWeight: "bold", color: "#E7B10A", fontFamily: "Times New Roman", fontSize: "17px" }} class="list-group-item list-group-item-action" href="#list-item-2">Update Previous Campaign Details ...</a></button>
  }
  onClose={() => setOpen4(false)}
  onOpen={() => setOpen4(true)}
>
  <Header style={{ marginLeft: "100px", fontSize: "40px", color: "#263A29", fontFamily: "Times New Roman", marginTop: "40px" }}
    icon="clipboard outline"
    content="Please fill the Updated details with proper Campaign ID."
  />
  <Modal.Content >
    <h1 style={{ marginLeft: "100px", marginTop: "40px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Campaign ID : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter Campaign ID here"
      onChange={(e) => setpriviousCampaignId(e.target.value)}
    /></h1> 
    <h1 style={{ marginLeft: "100px", marginTop: "40px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Updated Campaign Name : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter Updated Campaign Name here"
      onChange={(e) => setpriviousCampaignName(e.target.value)}
    /></h1> 
    <h1 style={{ marginLeft: "100px", marginTop: "40px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Updated Campaign Img Url : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter Updated Campaign ImgUrl here"
      onChange={(e) => setpriviousCampaignImgurl(e.target.value)}
    /></h1> 
    <h1 style={{ marginLeft: "100px", marginTop: "40px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Updated Campaign Info : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter Updated Campaign Info here"
      onChange={(e) => setpriviousCampaignInfo(e.target.value)}
    /></h1> 
  </Modal.Content>
  <Modal.Actions style={{ marginRight: "300px" }}>
    <Button color="red" onClick={() => setOpen4(false)}>
      <Icon name="remove" /> Cancel
    </Button>
    <Button color="green" onClick={updatepriviousCampaigntoDB}>
      <Icon name="checkmark" /> Modify Privious Campaign
    </Button>
  </Modal.Actions>
</Modal>

            
        
     
              
            </div> <br></br>
      
            
     

  
    </div>
  </div>
  <div class="col-8" style={{marginLeft:"60px", backgroundColor:"#F4D160" ,borderRadius:"15px" }}>
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0" >
      
      <p style={{fontSize:"18px", textAlign:"left"}} > <i class="calendar plus icon"></i> Admin can effortlessly create new upcoming campaigns with all the essential details, efficiently scheduling impactful initiatives.</p> <hr/>  <br/>
      <p style={{fontSize:"18px",textAlign:"left"}}> <i class="calendar plus icon "></i>Admin can seamlessly input past successful campaign details, preserving the essence of our impactful endeavors.</p> <hr/><br/><br/>
      <p style={{fontSize:"18px",textAlign:"left"}}> <i class="exchange icon"></i> Admin can effortlessly update upcoming campaign information. </p> <hr/> <br/><br/>
      <p style={{fontSize:"18px",textAlign:"left"}}> <i class="exchange icon"></i>Admin can conveniently edit past campaign details to reflect the success and impact of our previous endeavors.</p><hr/> 
      
    </div>
  </div>
</div>

            </div>

            
            <div class="ui basic modal">
  <div class="ui icon header">
    <i class="archive icon"></i>
    Archive Old Messages
  </div>
  <div class="content">
    <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
  </div>
  <div class="actions">
    <div class="ui red basic cancel inverted button">
      <i class="remove icon"></i>
      No
    </div>
    <div class="ui green ok inverted button">
      <i class="checkmark icon"></i>
      Yes
    </div>
  </div>

            
  


            </div> <br></br> 
      <br></br>  <br></br> 
      <br></br> 
            <Footer/>
      <br></br> 
      <br></br> 
    <Copyright/>
        </div>
    )
}

export default Adminconsole;