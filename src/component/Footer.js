import React from 'react'
import logo from "../assets/logo.png";


const Footer = () => {

  return (
    <div style={{backgroundColor:"rgb(244,249,252)"}}>

<div className='main2'>
    <div style={{width:"30%" , marginTop:"70px"}}>
        <img src={logo}/>
        <p style={{color:"rgb(165,174,183)" , marginTop:"-5px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting
          industry</p>
    </div>

    <div className='side-div'>
<div>
    <h2 className='font'>Department</h2>
    <p style={{color:"rgb(165,174,183)"}}>Surgery</p>
    <p className='side-p'>Women's Health</p>
    <p className='side-p'>Radiology</p>
    <p className='side-p'>Cardiac</p>
    <p className='side-p'>Medicine</p>
</div>
<div>
<h2 style={{fontWeight:"bold"}}>Support</h2>
    <p style={{color:"rgb(165,174,183)"}}>Terms and Condition</p>
    <p className='side-p'>Privacy Policy</p>
    <p className='side-p'>Company Support</p>
    <p className='side-p'>FAQ Questions</p>
    <p className='side-p'>Company Licence</p>
</div>
<div>
<h2 className='font'>Get in Touch</h2>
<p style={{color:"rgb(165,174,183)"}}>Support available for 24*7</p>
<p className='contact'>Support@gmail.com</p>
<p style={{color:"rgb(165,174,183)" , marginTop:"-8px"}}>Mon-Fri:08:30-18:00</p>
<p className='contact'>+23-456-6588</p>
</div>
    </div>
</div>

<div>
    <hr className='hr'/>
</div>

<div style={{textAlign:"right" , marginRight:"10%" , marginTop:"50px"}}>
    <input placeholder='Your Email address' className='input'/>
    <button className='button'>SUBSCRIBE</button>
</div>

    </div>
    
  )
}

export default Footer