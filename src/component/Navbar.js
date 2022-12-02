import React from "react";
import "../App.css"
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div
        className="navbar"
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <p className="support">support@novena.com</p>
          <p className="support">
            Address Ta-134/A,New York,USA
          </p>
        </div>
        <div style={{ display: "flex", gap: "5px" }}>
            <div>
            <p className="support">Call Now :</p>
            </div>
          <div style={{display:"flex",alignItems:"center"}}>
          <span style={{ color: "white" }}>
          823-4565-13456
          </span>
          </div>
        </div>
      </div>

      <div className="image">
        <div>
          <img src={logo} className="logo"/>
        </div>

        <div className="min-nav">
          <p style={{color:"rgb(212,59,106)"}}>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Department</p>
          <p>Doctors</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
