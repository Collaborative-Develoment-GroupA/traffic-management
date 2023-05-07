import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import Popup from './Popup';

export const Officer = () => {
const [officers, setOfficers] = useState([]);
const [values, setValues] = useState({
  firstname: "",
  lastname: "",
  citizenship: "",
  officer_id:"",
  department: "",
  post:""
});

const handleChange = (e) => {
  e.preventDefault();
  setValues({
  ...values,
  [e.target.name] : e.target.value
  })
 
}


const [buttonPopup,setButtonPopup]=useState(false);

useEffect(() => {
  const fetchOfficers = async () => {
    try {
      const response = await fetch("https://simonpradhan.pythonanywhere.com/officers/");
      const data = await response.json();
      setOfficers(data);
    } catch (error) {
      console.log(error);
  
    }
  };
  fetchOfficers();
}, []);

const handleAddClick = async (e) => {
  e.preventDefault();
  console.log(values);

  try {
    const response = await fetch("https://simonpradhan.pythonanywhere.com/officer/", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
    }, body: JSON.stringify({
      firstname: values.firstname,
      lastname: values.lastname,
      citizenship: values.citizenship,
      officer_id: values.officer_id,
      department: values.department,
      post: values.post
    }
    ),

    });

    const data = await response.json();
    if (data['success']) {
      return window.location.href = "/officer";
    } else {
      alert("Invalid Credentials");
    }
  } catch (error) {
  console.log(error);
  // Handle the error
  }
}


return (
<>
<Navbar />
          
          <div className='officer-heading'>
            <h2 className='text'>ADD OR REMOVE OFFICER DETAILS</h2>
          </div>
    
          <div className='traffic'>
            <form className='addTraffic'>
              <div className="form-section">
                <div className="form-sectionbasicinfo">
                  <input placeholder='First Name' type="text" id="firstname" name="firstname" value ={values.firstname} onChange={handleChange} />
                  <input placeholder="Last Name" type="text" id="lastname" name="lastname" value={values.lastname} onChange={handleChange} />
                  <input placeholder="Citizenship Number" type="text" id="citizenship" name="citizenship" value={values.citizenship} onChange={handleChange} />
                </div>
              </div>
              <div className="form-section">
                <div className="form-sectionjobinfo">
                  <input type="text" placeholder="ID" id="officer_id" name="officer_id" value={values.officer_id} onChange={handleChange} />
                  <input placeholder="Department" type="text" id="department" name="department" value={values.department} onChange={handleChange} />
                  <input placeholder="Post" type="text" id="post" name="post" value={values.post} onChange={handleChange} />
                </div>
              </div>
              <br />
             
              <div className="officersavebtn">
              <button className="savebutton" onClick={handleAddClick}>
                ADD
              </button>
              <button className="removebutton" onClick={(event) => {
                event.preventDefault();
                setButtonPopup(true)
              }}>
                REMOVE
              </button>
              <Popup trigger={buttonPopup}/>
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
                {officers.map((officer) => (
                <tr key={officer.id}>
                  <td>{officer.id}</td>
                  <td>{officer.firstname}</td>
                  <td>{officer.lastname}</td>
                  <td>{officer.citizenship}</td>
                  <td>{officer.department}</td>
                  <td>{officer.post}</td>
                </tr>
              ))}
    
                 
                </tbody>
              </table>
            </div>
          </div>
        </>
      );
    
    }
    export default Officer;