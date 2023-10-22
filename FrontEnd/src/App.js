import React from "react";
import { Routes,Route } from "react-router-dom";
import Copyright from "./Components/Copyright/Copyright";
import NavBar from "./Components/NavSlider/NavBar";
import Footer from "./Components/Footer/Footer";
import AdminLogIn from "./Components/Adminconsole/AdminLogIn/AdminLogIn";
import Home from "./Components/Home/Home";
import Aboutus from "./Components/Aboutus/Aboutus";
import Contactus from "./Components/Contactus/Contactus";
import Adminconsole from "./Components/Adminconsole/Adminconsole";


const App = () => {
  return (
    <div className="App">
    
      <Routes> 
       
          <Route exact path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/AdminLogIn" element={<AdminLogIn/>}/>
          <Route path="/Adminconsole" element={<Adminconsole/>}/>
        
      </Routes>
      
    </div>
  );
};

export default App;
