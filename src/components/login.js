import React, { useState } from 'react';
import './login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else if (event.target.name === 'password') {
      setPassword(event.target.value);
    }
  };

  const redirectToLogin = () => {
    window.location.href = 'home';
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(email, password);
    redirectToLogin();
  };

  const redirectToForgetPassword = () => {
    window.location.href = '/forgetpassword';
  };

  return (
    <>
      <div className="main">
     
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
              <li>
                <a href='#'>Sign up</a>
              </li>
            </ul>
          </div>
          <div className="search-container">
            <input
              className="search"
              type="search"
              name=""
              placeholder="Type To text"
            />
            <a href="#">
              <button className="button">Search</button>
            </a>
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
          <div className="form">
            <h2>Log In</h2>
            <input
              type="email"
              name="email"
              placeholder="Enter your email here"
              value={email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password here"
              value={password}
              onChange={handleChange}
            />
            <button className="log" id="log" onClick={handleLogin}>
              Login
            </button>
            <p className="link" id="forget">
              <br />
              <a href="#" onClick={redirectToForgetPassword}>
                Forget Password{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
