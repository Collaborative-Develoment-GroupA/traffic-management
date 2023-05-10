import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export const ForgetPage = () => {
const [email, setEmail] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://simonpradhan.pythonanywhere.com/forgetpass/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        sessionStorage.setItem("otp", data.otp);
        sessionStorage.setItem("email", email);
        window.location.href = "/code";
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
     <div className="log-icon">
          <img src="assest/images/logo.png" alt="TMS" />
          <h2 className="text">TRAFFIC MANAGEMENT SYSTEM</h2>
        </div>

      <div className="contentlog">
        <div classNameName='logtxtcontainer'>
  
  
        <h1>
          TRAFFIC <br /><span>MANAGEMENT</span> <br />SYSTEM
        </h1>
        <p className="par">Welcome to the Traffic Management System (TMS). As a 
          <br /> traffic officer you play a critical role in ensuring the safety
          <br /> and smooth flow of traffic on our roads. We understand that your 
      
          <br/>job can be challenging and stressful at times,  which 
          <br />is why we have developed this system to support you in your duties.</p>
        </div>
    
            
  
        <div className="formlog">
          <h2 classNameName='logintxt'>Forget Password</h2>
        <div className='paragraph'>
            <p>Please enter the valid email to get the <br/>verification code for password reset.</p>
        </div>
        <input type="email" name="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
       
        <button class="log" id="forgetbtn"><Link to="/code" onClick={handleSubmit}>Send</Link></button>

        <br />
        <div className="forget-container">
         <Link to="/login">Back login
          </Link>
        </div>
        

      

      </div>
    </div>
    </>
  )
}
