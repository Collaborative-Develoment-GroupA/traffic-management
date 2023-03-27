import React, { useState } from 'react';
import './code.css'

const CodePage = () => {
  const [code, setCode] = useState("");

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const redirectToVerify = () => {
    window.location.href = 'reset';
  };

  const handleVerify = () => {
    console.log(code);
    redirectToVerify();
  };

  return (
    <>
     <div className="main">
      <div className='searchbar'>
                  <input type="text" name="search" placeholder='Search' />&emsp;
              <button className="button">Search</button>

            </div>
        <div className="navbar">
          <div className="icon">
            <img src="logo.png" alt="TMS" />
            <h2 className="text">TMS</h2>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Departments</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          </div>
        <div className="content">
          <h1>
            TRAFFIC <br />
            <span>MANAGEMENT</span> <br />
            SYSTEM
          </h1>
          <p className="par">
            Welcome to the Traffic Management System (TMS). As a traffic officer
            you play a <br /> critical role in ensuring the safety and smooth
            flow of traffic on our roads. <br /> We understand that your job can
            be challenging and stressful at times, <br /> which is why we have
            developed this system to support you in your duties.
          </p>
          <div className="forget-form">
            <h2>Code Verification</h2>
            <div className="info">
              <p className="para">
                Enter the code sent to your provided email.If you didn't get
                the code
                <br />
                please check your spam folder.
              </p>
              <input
                type="text"
                name="code"
                placeholder="Enter OTP Code"
                value={code}
                onChange={handleChange}
              />
              <button className="send" id="send" onClick={handleVerify}>
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodePage;
