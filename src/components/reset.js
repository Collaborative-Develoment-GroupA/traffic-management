import React, { useState } from 'react';
import './reset.css';

const ResetPage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleReset = (event) => {
    event.preventDefault();
    // Perform password reset logic here
    console.log(`New Password: ${newPassword}`);
    console.log(`Confirm Password: ${confirmPassword}`);

    redirectToLogin();
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
            you play a <br />
            critical role in ensuring the safety and smooth flow of traffic on
            our roads.
            <br />
            We understand that your job can be challenging and stressful at
            times, <br /> which is why we have developed this system to support
            you in your duties.
          </p>
          <div className="forget-form">
            <h2>Reset Password</h2>
            <div className="info">
              <p className="para">
                Create a new password that must contain 8 characters with
                combination of letters, <br />
                numbers and special characters(!@#$).{' '}
              </p>
              <input
                type="password"
                name="newpassword"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
              />
              <input
                type="password"
                name="confirmpassword"
                placeholder="Re-enter the password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
              <button className="send" onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPage;
