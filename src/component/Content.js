import React from "react";
import "../App.css";
import Thomas from "../assets/1.jpg";
import Harrision from "../assets/2.jpg";
import Alexander from "../assets/3.jpg";
import Edward from "../assets/4.jpg";
import Banner from "../assets/banner.jpg";

const Content = () => {
  return (
    <div>
      <div
        className="main"
      >
        <p>All Doctors</p>
        <h1 className="special">Specialized Doctors</h1>
      </div>

      <div className="doctors">
        <h2 className="font">Doctors</h2>
      </div>

      <div>
        <p className="loreum">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>

      <div style={{margin:"auto" , display:"block" , marginLeft:"auto" , marginRight:"auto" , width:"50%"}}>

<div style={{display:"flex" , gap:"30px"}}>
   <p className="department">All Department</p>
   <p className="bold">Cardiology</p>
   <p className="bold">Dental</p>
   <p className="bold">Neurology</p>
   <p className="bold">Medicine</p>
   <p className="bold">Pediatric</p>
   <p className="bold">Traumatology</p>
</div>
</div>

<div className="grid">
   <div>
      <img src={Thomas}/>
      <h3 className="name">Thomas Henry</h3>
      <p className="role">Cardiology</p>
   </div>
   <div>
   <img src={Harrision}/>
      <h3 className="name">Harrision Samules</h3>
      <p className="role">Radiology</p>
   </div>
   <div>
   <img src={Alexander}/>
      <h3 className="name">Alexander James</h3>
      <p className="role">Dental</p>
   </div>
   <div>
   <img src={Edward}/>
      <h3 className="name">Edward John</h3>
      <p className="role">Pediatric</p>
   </div>
   <div>
   <img src={Thomas}/>
      <h3 className="name">Thomas Henry</h3>
      <p className="role">Neurology</p>
   </div>
   <div>
   <img src={Alexander}/>
      <h3 className="name">Henry Samuel</h3>
      <p className="role">Palmology</p>
   </div>
   <div>
   <img src={Thomas}/>
      <h3 className="name">Thomas Henry</h3>
      <p className="role">Cardiology</p>
   </div>
   <div>
   <img src={Alexander}/>
      <h3 className="name">Harrision Thomas</h3>
      <p className="role">Traumatology</p>
   </div>
   <div>
   <img src={Edward}/>
      <h3 className="name">Johnas Thomson</h3>
      <p className="role">Cardiology</p>
   </div>
   <div>
   <img src={Alexander}/>
      <h3 className="name">Henry Forth</h3>
      <p className="role">Haematology</p>
   </div>
   <div>
   <img src={Edward}/>
      <h3 style={{marginTop:"0"}}>Thomas Henry</h3>
      <p className="role">Cardiology</p>
   </div>
</div>

<div>
   <img className="image2" src={Banner}/>
</div>

      </div>
  );
};

export default Content;
