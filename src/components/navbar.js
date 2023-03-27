import React from "react";
import './navbar.css';

const NavBar = () => {

  return (
     
        <div className="navbar">
          <div className="icon">
            <img src="logo.png" alt="TMS" />
            <h2 className="text">TMS</h2>
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
        
 
  );
}

export default NavBar;

