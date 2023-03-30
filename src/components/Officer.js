import React from 'react'
import Navbar from './Navbar';

export const Officer = () => {
  // const vehiclesData = [
  //   { id: 1, make: 'Toyota', model: 'Corolla', year: 2019, color: 'Silver', plateNumber: 'ABC123' },
  //   { id: 2, make: 'Honda', model: 'Civic', year: 2020, color: 'White', plateNumber: 'DEF456' },
  //   { id: 3, make: 'Ford', model: 'Mustang', year: 2018, color: 'Red', plateNumber: 'GHI789' }
  // ]; // replace with actual data from your backend API

  return (
    <>
    <Navbar/>
    <div className='officer-heading'>
    <h2 className='text'>ADD OR REMOVE OFFICER DETAILS</h2>
    </div>
     
      <div className='traffic'>

        <form className='addTraffic'>
          <div className="form-section">

            <div className="form-sectionbasicinfo">

              <input placeholder='First Name' type="text" id="firstname" name="name" required />
              <input placeholder="Last Name" type="text" id="lastname" name="name" required />
              <input placeholder="Citizenship Number" type="text" id="citizenship" name="citizenship" required />

            </div>
          </div>
          <div className="form-section">
            <div className="form-sectionjobinfo">

              <input type="text" placeholder="ID" id="id" name="id" required />
              <input placeholder="Department" type="text" id="department" name="department" required />
              <input placeholder="Post" type="text" id="post" name="post" required />
            </div>
          </div>
          <br />

          <div className='savebtn'>

            <button className="savebutton">ADD</button>
            <br />
            <button className="removebutton">REMOVE</button>
          </div>

        </form>
        
        <div className='officer-table '>
          <table>
            <thead>
              <tr>
                <th>ID</th>
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
                <td>Nancy</td>
                <td>Bhujel</td>
                <td>1234- 1234</td>
                <td>Thapathali</td>
                <td>ofiicer</td>
              </tr>
              <tr>
              <td>#12345</td>
                <td>Nancy</td>
                <td>Bhujel</td>
                <td>1234- 1234</td>
                <td>Thapathali</td>
                <td>ofiicer</td>
              </tr>
              <tr>
              <td>#12345</td>
                <td>Nancy</td>
                <td>Bhujel</td>
                <td>1234- 1234</td>
                <td>Thapathali</td>
                <td>ofiicer</td>
              </tr>
              <tr>
              <td>#12345</td>
                <td>Nancy</td>
                <td>Bhujel</td>
                <td>1234- 1234</td>
                <td>Thapathali</td>
                <td>ofiicer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

}
