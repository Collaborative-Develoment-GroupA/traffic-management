import React from 'react';
import './forgetpassword.css';

const ForgetPage = () => {
  const redirectToSend = () => {
    window.location.href = 'code';
  };

  const redirectToLogin = () => {
    window.location.href = 'login';
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
            you play a
            <br /> critical role in ensuring the safety and smooth flow of
            traffic on our roads.
            <br />
            We understand that your job can be challenging and stressful at
            times,
            <br /> which is why we have developed this system to support you in
            your duties.
          </p>
          <div className="forget-form">
            <h2>Forget Password</h2>
            <div className="info">
              <p className="para">
                Please enter the valid email to get the
                <br />
                verification code for password reset.
              </p>
              <input
                type="text"
                name="email"
                placeholder="Enter the email"
              />
              <button className="send" id="forgot">
                <a href="#" onClick={redirectToSend}>
                  Send{" "}
                </a>
              </button>
              <p className="link">
                <a href="#" onClick={redirectToLogin}>
                  Back to login{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPage;
