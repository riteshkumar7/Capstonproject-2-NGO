import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpeg';
import admin from './admin.jpeg';

const NavBar = () => {
  return (
    <div className="mainnavbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light"  >
        <a className="navbar-brand" href="#" style={{ marginLeft: "60px" }}>
          <h1>
            <img className="logo" src={logo} width="60" height="60" alt="" />
            <t></t><t></t> <t></t>आधार
          </h1>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link to="/" style={{ marginLeft: "8px", fontSize: "22px", fontWeight: "bold", fontFamily: "Times New Roman" }} className="nav-link">HOME</Link>
            </li>
            <li className="nav-item">
              {/* Update the to prop to point to "/Aboutus" */}
              <Link to="/Aboutus" style={{ marginLeft: "8px", fontSize: "22px", fontWeight: "bold", fontFamily: "Times New Roman" }} className="nav-link">ABOUT US</Link>
            </li>
            <li className="nav-item">
            <Link to="/Contactus" style={{ marginLeft: "8px", fontSize: "22px", fontWeight: "bold", fontFamily: "Times New Roman" }} className="nav-link">CONTACT US</Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <form className="form-inline my-2 my-lg-0">
              <a className="navbar-brand" href="#">
                <img src={admin} width="40" height="40" alt="Admin" />
              </a>
              <Link to="/AdminLogIn"> <button  style={{ color : "white", marginRight: "40px", fontSize: "16px", fontWeight: "bold", fontFamily: "Times New Roman", backgroundColor: "Black" }} className="btn btn-outline-success my-2 my-sm-0" type="submit">ADMIN</button> </Link> 
            </form>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
