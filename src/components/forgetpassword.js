import React from 'react';

import { Link } from 'react-router-dom';

export const ForgetPage = () => {
  return (
    <div class="contentlog">
      <div className='logtxtcontainer'>


      <h1>
        TRAFFIC <br /><span>MANAGEMENT</span> <br />SYSTEM
      </h1>
      <p class="par">Welcome to the Traffic Management System (TMS). As a traffic officer you play a
        <br /> critical role in ensuring the safety and smooth flow of traffic on our roads.
        <br />We understand that your job can be challenging and stressful at times,
        <br /> which is why we have developed this system to support you in your duties.</p>
      </div>

      <div className="formlog">
        <h2 className='logintxt'>Forget Password</h2>
        <div className='paragraph'>
            <p>Please enter the valid email to get the <br/>verification code for password reset.</p>
        </div>
        <input type="email" name="email" placeholder="E-mail" />
       
        <button class="log" id="forgetbtn"><Link to="/code">Send</Link></button>

        <br />
        <div className="forget-container">
         <Link to="/login">Back login
          </Link>
        </div>
        

      

      </div>
    </div>
  )
}
