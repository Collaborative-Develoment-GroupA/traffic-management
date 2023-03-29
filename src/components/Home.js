import React from 'react'

export const Home = () => {
    return (
        <div className='homebody'>
            <div className="dashboard">
                <h2>Dashboard</h2>
                <div className="stats">
    
                    <div className="stat">
                        <h3>Total Users</h3>
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
                    <div className='graph'>
                        <img src="asset/images/graphTraffic.png"  />
                    </div>
                </div>

            </div>
            <div className="news-container">
                <div className="paragraph">
                    <p>News and Notices</p>

                </div>
                <button className="dropdown-btn1">Recent accident in the area</button>
                <div className="accident">
                    <p>This method is often used by journalists to provide facts in their stories and it is
                        <br /> the first step in crafting a product description.</p>
                </div>

            </div>
            </div>




    )
}
