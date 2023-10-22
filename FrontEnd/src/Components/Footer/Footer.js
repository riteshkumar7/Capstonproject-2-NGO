import { Icon } from 'semantic-ui-react'
const Footer=()=>{
    return(
        <div className="mainFooter" style={{backgroundColor:"#F4D160"}}> 

        <div class="container text-center">
  <div class="row row-cols-4" >
    <div class="col"> <div> <h1 style={{marginTop:"15px"}} > Smiling Earth </h1> <hr></hr> <p style={{fontSize:"14px",textAlign:"left",marginBottom:"12px",fontWeight:"bold"}}>We are a dedicated NGO committed to uplifting vulnerable communities, promoting gender equality, and protecting the environment. Through our passion and collective efforts, we strive to create a more equitable society and leave a lasting impact on the lives we touch. Together, we envision a world where hope and opportunity know no bounds.</p>  </div></div>
    <div class="col"><div> <h1 style={{marginTop:"15px"}}> Our Mission </h1> <hr></hr> <p style={{fontSize:"14px",textAlign:"left",fontWeight:"bold"}}> Empowering communities through sustainable initiatives, providing access to education, healthcare, and essential resources to foster positive change and create a brighter future for all.</p>   </div></div>
    <div class="col"><div> <h1 style={{marginTop:"15px"}}> Our Vission  </h1> <hr></hr> <p style={{fontSize:"14px",textAlign:"left",fontWeight:"bold"}}> A world where every individual thrives with dignity, equality, and compassion, breaking the cycle of poverty and transforming lives through community-driven initiatives.</p>   </div></div>
   
    <div class="col"><div> <h1 style={{marginTop:"15px"}}> Contact Us  </h1> <hr></hr> <p style={{fontSize:"14px",textAlign:"left",fontWeight:"bold"}}> <Icon name='location arrow' />  <b> Near Shivaji Park,Mumbai. </b></p>  <p style={{fontSize:"14px",textAlign:"left",fontWeight:"bold"}}> <Icon name='call square' />  <b> +91 1234567890</b></p>  <p style={{fontSize:"14px",textAlign:"left",fontWeight:"bold"}}> <Icon name='mail' /> <b>contact@smilingearth.com</b> </p> <p style={{fontSize:"14px",textAlign:"left",fontWeight:"bold"}}> <Icon name='instagram' /> <t/><Icon name='linkedin' /> <t/><Icon name='youtube play' /></p>   </div></div>
   
    
  </div>
</div>

        </div>
    )
}

export default Footer;