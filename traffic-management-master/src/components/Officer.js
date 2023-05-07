// import React, { useState, useEffect } from 'react'
// import Navbar from './Navbar';
// import Popup from './Popup';



// export const Officer = () => {

//   const [showMessage, setShowMessage] = useState(false);
//   const [officers, setOfficers] = useState([]);
//   const [values, setValues] = useState({
//     firstname: "",
//     lastname: "",
//     citizenship: "",
//     officer_id:"", 
//     department: "",
//     post:""
//   })

//   const handleChange = (e) => {
//     e.preventDefault();
//     setValues({
//       ...values,
//       [e.target.name] : e.target.value
//     })
//   }

//   const [buttonPopup,setButtonPopup]=useState(false);
  

//   useEffect(() => {
//     const fetchOfficers = async () => {
//       try {
//         const response = await fetch("https://simonpradhan.pythonanywhere.com/officers/");
//         const data = await response.json();
//         setOfficers(data);
//       } catch (error) {
//         console.log(error);
//         // Handle the error
//       }
//     };
//     fetchOfficers();

//   }, []);

//   const handleAddClick = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("https://simonpradhan.pythonanywhere.com/officer/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           firstname: values.firstname, 
//           lastname: values.lastname, 
//           citizenship: values.citizenship, 
//           officer_id: values.officer_id, 
//           department: values.department,
//           post: values.post
//         }),
//       });
//       const data = await response.json();
//       if (data['success'] === true) {
//         return window.location.href = "/officer";
//       } else {
//         alert("Invalid Credentials");
//       }
//     } catch (error) {
//       console.log(error);
//       // Handle the error
//     }
//   }

//   const handleRemoveClick = () => {
//     setShowMessage("remove");
//   };
 
//   const handleSubmit = (e) => {
//     e.preventDefault(); // prevent default form submission behavior
//     // handle form submission logic here
//     setValues({
//       firstname: "",
//       lastname: "",
//       citizenship: "",
//       officer_id:"", 
//       department: "",
//       post:""
//     })
//   };
//   return (
//     <>
//       <Navbar />
      
//       <div className='officer-heading'>
//         <h2 className='text'>ADD OR REMOVE OFFICER DETAILS</h2>
//       </div>

//       <div className='traffic'>
//         <form className='addTraffic'>
//           <div className="form-section">
//             <div className="form-sectionbasicinfo">
//               <input placeholder='First Name' type="text" id="firstname" name="firstname" required value={values.firstname} onChange={handleChange} />
//               <input placeholder="Last Name" type="text" id="lastname" name="lastname" required value={values.lastname} onChange={handleChange} />
//               <input placeholder="Citizenship Number" type="text" id="citizenship" name="citizenship" required value={values.citizenship} onChange={handleChange} />
//             </div>
//           </div>
//           <div className="form-section">
//             <div className="form-sectionjobinfo">
//               <input type="text" placeholder="ID" id="officer_id" name="officer_id" value={values.officer_id} onChange={handleChange} />
//               <input placeholder="Department" type="text" id="department" name="department" value={values.department} onChange={handleChange} />
//               <input placeholder="Post" type="text" id="post" name="post" value={values.post} onChange={handleChange} />
//             </div>
//           </div>
//           <br />
         
//           <div className="officersavebtn">
//           <button className="savebutton" onClick={handleAddClick}>
//             ADD
//           </button>
//           <button className="removebutton" onClick={() => setButtonPopup(true)}>
//             REMOVE
//           </button>
//           <Popup trigger={buttonPopup}>
//             <h3>Are you sure you want to remove officers?</h3>
//             <div className='yesNo'>
//             <button className="popupbutton" onClick={() => setValues([])}>
//               Yes
//             </button>
//             <button className="popupbutton" onClick={() => setButtonPopup(false)}>
//               No
//             </button>
//             </div>
//           </Popup>
//         </div>


//         </form>
//         <div className='officer-table '>
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>First Name</th>
//                 <th>Last Name</th>

//                 <th>Citizenship Number</th>
//                 <th>Department</th>
//                 <th>Post</th>
//               </tr>
//             </thead>
//             <tbody>
//             {officers.map((officer) => (
//             <tr key={officer.id}>
//               <td>{officer.id}</td>
//               <td>{officer.firstname}</td>
//               <td>{officer.lastname}</td>
//               <td>{officer.citizenship}</td>
//               <td>{officer.department}</td>
//               <td>{officer.post}</td>
//             </tr>
//           ))}

             
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );

// }
// export default Officer;
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import Popup from './Popup';

export const Officer = () => {

const [showMessage, setShowMessage] = useState(false);
const [officers, setOfficers] = useState([]);
const [values, setValues] = useState({
firstname: "",
lastname: "",
citizenship: "",
officer_id:"",
department: "",
post:""
})

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
// Handle the error
}
};
fetchOfficers();

}, []);

const handleAddClick = async (e) => {
e.preventDefault();
try {
const response = await fetch("https://simonpradhan.pythonanywhere.com/officer/", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
firstname: values.firstname,
lastname: values.lastname,
citizenship: values.citizenship,
officer_id: values.officer_id,
department: values.department,
post: values.post
}),
});
const data = await response.json();
if (data['success'] === true) {
return window.location.href = "/officer";
} else {
alert("Invalid Credentials");
}
} catch (error) {
console.log(error);
// Handle the error
}
}

const handleRemoveClick = () => {
setShowMessage("remove");
};

const handleSubmit = (e) => {
e.preventDefault(); 
setValues({
firstname: "",
lastname: "",
citizenship: "",
officer_id:"",
department: "",
post:""
})
};
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
              <button className="removebutton" onClick={() => setButtonPopup(true)}>
                REMOVE
              </button>
              <Popup trigger={buttonPopup}>
                <h3>Are you sure you want to remove officers?</h3>
                <div className='yesNo'>
                <button className="popupbutton" onClick={() => setValues([])}>
                  Yes
                </button>
                <button className="popupbutton" onClick={() => setButtonPopup(false)}>
                  No
                </button>
                </div>
              </Popup>
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