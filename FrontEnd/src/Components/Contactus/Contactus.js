import Copyright from "../Copyright/Copyright";
import Footer from "../Footer/Footer";
import NavBar from "../NavSlider/NavBar";
import '../Contactus/Contactus.css'
import Formv from "./Form";
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Form } from "semantic-ui-react";


const Contatcus=()=>{
    return(
    
      <div>
        <NavBar/>
        <div>
        <img class="bg-image"
          src="https://alltogether.swe.org/wp-content/uploads/2020/11/group-of-volunteers_1200x630.png"
          alt="Responsive image"
          style={{ width: '100%', height: '400px', objectFit: 'cover' }}
        />
        <div class="bg-text">
  <h4>join now</h4>
  <h1>CONTACT US</h1>
</div>
        <br>
        </br>
        <br/>
        <br/>
        </div>
  <br/>
  <br/>
  <br/>     
<div>
  <h1>DETAILS</h1>
  <Formv/>
</div>
<br/>
<br/>
<br/>
    <div>
    <div class="maps">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.672927324!2d72.71637245958217!3d19.08250200530587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1697180514225!5m2!1sen!2sin"
     width="600"
      height="450"
       style={{border:"0"}}
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

        </iframe>
        <Footer/>

        </div>
        <div/>
        
      
        </div>





        </div>
       
       
   
 
  

   
    );
}

export default Contatcus;