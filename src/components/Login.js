import React from 'react';

import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className="contentlog">
      <div class
      Name='logtxtcontainer'>


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
        <h2 classNameName='logintxt'>Log In</h2>
        <input type="email" name="email" placeholder="Enter the email" />
        <input type="password" name="password" placeholder="Enter the password" />
        <button className="log" id="log"><Link to="/home">Login</Link></button>

        <br /><br />
       <hr/>
        <div classNameName="forget-container">
              <Link to="/forgetpassword"> Forget Password ?</Link>
        </div>
      </div>
    </div>
  )
}
