import NavBar from './navbar';
import SideBar from './sidebar';
import React, { useState } from 'react';


const HomePage = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
     <NavBar/>
     <SideBar/>
          {/* <div className="home-table">
          <table width="15%">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Contact no.</th>
                <th>Position</th>
                <th>Posting Area</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>7</td>
                <td>Bob Johnson</td>
                <td>12345678</td>
                <td>Sales Associate</td>
                <td>Chicago</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Bob Johnson</td>
                <td>12345678</td>
                <td>Sales Associate</td>
                <td>Chicago</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Bob Johnson</td>
                <td>12345678</td>
                <td>Sales Associate</td>
                <td>Chicago</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Bob Johnson</td>
                <td>12345678</td>
                <td>Sales Associate</td>
                <td>Chicago</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Bob Johnson</td>
                <td>12345678</td>
                <td>Sales Associate</td>
                <td>Chicago</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Bob Johnson</td>
                <td>12345678</td>
                <td>Sales Associate</td>
                <td>Chicago</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Alice Kim</td>
                <td>12345678</td>
                <td>Marketing Manager</td>
                <td>San Francisco</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="news-container">
          <div className="paragraph">
            <p>News and Notices</p>
          </div>
          <button className="dropdown-btn1" onClick={handleDropdownClick}>
            Recent accident in the area
          </button>
          {showDropdown && (
            <div className="accident">
              <a href="#">
                <p>
                  This method is often used by journalists to provide facts in
                  their stories and it is <br /> the first step in crafting a
                  product description.
                </p>
              </a>
            </div>
          )}
        </div>
      */}
    </>
  );
};

export default HomePage;
