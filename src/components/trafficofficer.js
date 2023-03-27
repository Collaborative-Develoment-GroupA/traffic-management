import React from 'react'
import './trafficofficer.css'

export const AdminPage = () => {
      return (
        <>
        <h2 className='title'>Add/Remove Traffic Officer</h2>
        <div className='traffic'>

            <form className='addTraffic'>
                <label className='violationlabel' htmlFor="name">ID:</label>
                <input className='violationinput' type="text" id="id" name="id" required />

                <label className='violationlabel' htmlFor="name">First Name:</label>
                <input className='violationinput' type="text" id="name" name="name" required />

                <label className='violationlabel' htmlFor="name">Last Name:</label>
                <input className='violationinput' type="text" id="name" name="name" required />

                <label className='violationlabel' htmlFor="text">Citizenship Number:</label>
                <input className='violationinput' type="text" id="data" name="date" required />

                <label className='violationlabel' htmlFor="department">Department:</label>
                <input className='violationinput' type="text" id="department" name="department" required />

                <label className='violationlabel' htmlFor="post">Post:</label>
                <input className='violationinput' type="text" id="post" name="post" required />
                <br/>
               
                
                
            </form>
            <div className='savebtn'>

                <button className="savebutton">Add</button>
                <button className="removebutton">Remove</button>
            </div>
        </div>
            <div className='traffic-table '>
<table>
  <thead>
    <tr>
      <th> ID</th>
      <th>First Name</th>
      <th>Last Name</th>

      <th>Citizenship Number</th>
      <th>Department</th>
      <th>Post</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>#12345</td>
      <td>2023-03-21</td>
      <td>15:30:00</td>
      <td>KA 02 AB 1234</td>
      <td>Speeding</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>#12346</td>
      <td>2023-03-22</td>
      <td>08:45:00</td>
      <td>KA 01 CD 5678</td>
      <td>Red Light Violation</td>
      <td>$150</td>
    </tr>
    <tr>
      <td>#12347</td>
      <td>2023-03-23</td>
      <td>12:15:00</td>
      <td>KA 03 EF 9101</td>
      <td>Distracted Driving</td>
      <td>$200</td>
    </tr>
  </tbody>
</table>
            </div>
            </>
    );
}
