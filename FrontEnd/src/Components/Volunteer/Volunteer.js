import { useState,useEffect } from "react";
import { Button,Icon ,Header,  Modal} from "semantic-ui-react";
import axios from "axios";
 import slide4 from './slide4.png';
 import slide3 from './slide3.png';
 import slide1 from './slide1.png';
 import slide2 from './slide2.png';


const Volunteer = () => {
    const [volunteers, setVolunteer] = useState([
        
    ])

   const [open1,setOpen1]=useState();


    const [volunteersName,setvolunteersName]=useState();
    const [volunteersquote,setvolunteersquote]=useState();
    const [volunteersImageURL,setvolunteersImageURL]=useState();

    useEffect(() => {
        fetch('http://localhost:7689/getallvolunteer')
          .then(response => response.json()) 
          .then(data => {
            setVolunteer(data); 
          })
          .catch(error => {
            console.log(error);
          });  console.log(volunteers);
      } , [volunteers]);

      const addvolunteer=()=>{
        axios.post('http://localhost:7689/addnewVolunteer',{
            volunteersName:volunteersName,
            volunteersquote:volunteersquote,
            volunteersImageURL:volunteersImageURL
        });
        alert("New Volunterr Added...");
        setOpen1(false);
      }

    return (
        <div className='Mainvolunteer' style={{ marginLeft: "75px", marginRight: "75px", marginTop: "25px" }}>
            <h1 className='volunteerheading' style={{ fontSize:"60px" ,color: "#263A29", fontFamily: "Times New Roman" }}>Our Optimistic Volunteers</h1>
            <br />
            <h3 style={{ color: "#41644A",fontSize:"25px", textDecorationLine: "underline", fontFamily: "Copperplate" }}>Spreading smiles and changing lives through selfless service and boundless compassion! </h3>
            <br />

            <div className="row row-cols-1 row-cols-md-4 g-4">
                {volunteers.map((temp) => (
                    <div className="col" >
                        <div className="card" style={{backgroundColor:"#F4D160"}}>
                            <img src={temp.volunteersImageURL} className="card-img-top" alt="Volunteer" />
                            <div className="card-body">
                                <h5 className="card-title" style={{fontSize:"16px",fontWeight:"bold"}}>{temp.volunteersName}</h5> <hr></hr>
                                <p className="card-text" style={{fontSize:"14px",fontWeight:"bold"}}> "{temp.volunteersquote}"</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <br/>


                     <div>
            <Modal style={{ borderRadius: "20px", height: "500px", marginLeft: "230px", marginTop: "100px", backgroundColor: "#F4D160" }}
  closeIcon
  open={open1}
  trigger={
    <button className="btn btn-dark"> <a style={{ backgroundColor: "#263A29", fontWeight: "bold", color: "#E7B10A", fontFamily: "Times New Roman", fontSize: "17px" }} class="list-group-item list-group-item-action" href="#list-item-2">Become a Volunteer </a></button>
  }
  onClose={() => setOpen1(false)}
  onOpen={() => setOpen1(true)}
>
  <Header style={{ marginLeft: "100px", fontSize: "40px", color: "#263A29", fontFamily: "Times New Roman", marginTop: "40px" }}
    icon="clipboard outline"
    content="Please fill the following details."
  />
  <Modal.Content >
    <h1 style={{ marginLeft: "100px", marginTop: "70px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Your Name : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter Your Name here"
      onChange={(e)=> setvolunteersName(e.target.value)}
    /></h1>
    <h1 style={{ marginLeft: "100px", marginTop: "70px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Whats Motivates You : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter here"
      onChange={(e)=>setvolunteersquote(e.target.value)}
    /></h1>
    <h1 style={{ marginLeft: "100px", marginTop: "70px", color: "#263A29", fontFamily: "Times New Roman" }}>Enter Img Url : <input style={{ fontSize: "20px", marginLeft: "10px", marginTop: "0px", color: "#263A29", fontFamily: "Times New Roman" }}
      type="text"
      placeholder="Enter Img Url here"
      onChange={(e)=> setvolunteersImageURL(e.target.value)}
    /></h1>
    
    
  </Modal.Content>
  <Modal.Actions style={{ marginRight: "300px" }}>
    <Button color="red" onClick={() => setOpen1(false)}>
      <Icon name="remove" /> Cancel
    </Button>
    <Button color="green" onClick={ addvolunteer }>
      <Icon name="checkmark" /> Submit
    </Button>
  </Modal.Actions>
</Modal>

            
             
            </div> <br></br> 


            
        </div>
    );
}

export default Volunteer;
