import React from 'react'
import Navbar from './Navbar';

// import Graph from './graph';

import '../styles/css/home.css';
export const Home = () => {
    return (
        <>
        <Navbar/>
       
        <div className='home-container'>
        
         </div>
        <div className='homebody'>
        
        <div className="stats">
    
                    <div className="stat">
                    <h3>Total Violations</h3>
                     <p>532</p>
                    </div>
                    <div className="stat">
                        <h3>Total Violations</h3>
                        <p>234</p>
                    </div>
                    <div className="stat">
                        <h3>Total Accidents</h3>
                        <p>12</p>
                    </div>
            <div className="dashboard">
               {/* <div className='graph'>
               <img src="../../../public/assest/images/graphTraffic.png"  />
                    
            </div> */}
               
            </div>

            </div>
            <div className="news-container">
                <div className="paragraph">
                    <p>News and Notices</p>
                </div>
                <div className='notice'>
                <select id="type" name="type">
                <option value="a">Officers updated post and posiitons</option>
                </select>
                <select id="type" name="type">
                <option value="b">New post vacancy announcement</option>
                </select>
                <select id="type" name="type">
                <option value="c">Ticket violations Rules</option>
                </select>
                </div>
                
                {/* <button className="dropdown-btn1">Recent accident in the area</button>
                <div className="accident">
                    <p>This method is often used by journalists to provide facts in their stories and it is
                        <br /> the first step in crafting a product description.</p>
                </div> */}

            </div>
        </div>


</>

    );
}
