import UpcomingCampaign from "../UpcomingCampaign/UpcomingCampaign";
import PreviousCampaign from "../PriviousCampaign/PriviousCampaign";
import Slider from "../NavSlider/Slider";
import Volunteer from "../Volunteer/Volunteer";
import NavBar from "../NavSlider/NavBar";
import Footer from "../Footer/Footer";
import Copyright from "../Copyright/Copyright";
import './Home.css';
import Adminconsole from "../Adminconsole/Adminconsole";

const Home=()=>{
    return(
        <div className="mainhome">
    <NavBar/> <br/>
    
    <Slider/>
    <UpcomingCampaign/>
      <br></br> <br></br>
    <PreviousCampaign/>
      <br></br> <br></br>
    <Volunteer/>
    <br></br> <br></br> <br></br> <br></br> 
    <Footer/>
      <br></br> 
      <br></br> 
    <Copyright/>
      <br></br> 
      

        </div>
    );
}

export default Home;