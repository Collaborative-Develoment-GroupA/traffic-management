import React, { useState } from 'react';
import './deparment.css';

const DepartmentPage = () => {

  const handleDropdownClick = () => {
    // implementation for handling dropdown button click
  };

  return (
    <>
    <div className="main">
  <div className='searchbar'>
    <input type="text" name="search" placeholder='Search' />&emsp;
    <button className="button">Search</button>
  </div>

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
    
      <div className="department-container">
        <div className="dropdown-row">
          <button className="dropdown-btn1" onClick={handleDropdownClick}>
            Department of Thapathali
          </button>
          <button className="dropdown-btn1" onClick={handleDropdownClick}>
            Department of Koteshwor
          </button>
          <button className="dropdown-btn1" onClick={handleDropdownClick}>
            Department of Naxal
          </button>
          <button className="dropdown-btn1" onClick={handleDropdownClick}>
            Department of Singha Durbar
          </button>
          <button className="dropdown-btn1" onClick={handleDropdownClick}>
            Department of DurbarMrg
          </button>
          <button className="dropdown-btn1" onClick={handleDropdownClick}>
            Department of Baneshwor
          </button>
          <button className="dropdown-btn1" onClick={handleDropdownClick}>
            Department of Satdobato
          </button>
          <button className="dropdown-btn1" onClick={handleDropdownClick}>
            Department of Gongobu
          </button>

          
      </div>
      <div className='picture'>
          <img src='image.jpeg' alt='image' />
        </div>
        </div>


       

</>

    
  );
};

export default DepartmentPage;
