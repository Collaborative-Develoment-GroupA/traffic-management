import React from 'react'

export const Officer = () => {
  // const vehiclesData = [
  //   { id: 1, make: 'Toyota', model: 'Corolla', year: 2019, color: 'Silver', plateNumber: 'ABC123' },
  //   { id: 2, make: 'Honda', model: 'Civic', year: 2020, color: 'White', plateNumber: 'DEF456' },
  //   { id: 3, make: 'Ford', model: 'Mustang', year: 2018, color: 'Red', plateNumber: 'GHI789' }
  // ]; // replace with actual data from your backend API

  return (
    <>
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
      </div>
    </>
  );

}
