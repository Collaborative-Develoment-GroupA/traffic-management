import React from 'react';

import { Link } from 'react-router-dom';

export const CodePage = () => {
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

      <div class="formlog">
        <h2 className='logintxt'>Code Verification</h2>
        <div className='paragraph'>
            <p>Enter the code sent to your provided <br/> email.If you didn't get the code<br/>please check your spam folder.</p>
        </div>
        <input type="text" name="code" placeholder="Enter OTP Code" />
       
        <button class="log" id="codebtn"><Link to="/reset">Verify</Link></button>

        <br />
        {/* <div className="reset-container">
         <Link to="/login">Back login
          </Link>
        </div> */}
        

      

      </div>
    </div>
  )
}
