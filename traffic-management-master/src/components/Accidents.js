import React from 'react'
import Navbar from './Navbar'
import { useEffect, useState } from 'react';



export const Accidents = () => {
    const [AccidentData, setAccidentData] = useState(['']);
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [fault_vehicle_number, setFault_Driver_Vehicle_Number] = useState('');
    const [fault_driver_name, setFault_Driver_Name] = useState('');
    const [fault_driver_email, setFault_Driver_Email] = useState('');
    const [fault_driver_phone, setFault_Driver_Phone] = useState('');
    const [fault_driver_address, setFault_Driver_Address] = useState('');
    const [victim_vehicle_number, setVictim_Vehicle_Number] = useState('');
    const [victim_name, setVictim_Name] = useState('');
    const [victim_email, setVictim_Email] = useState('');
    const [victim_phone, setVictim_Phone] = useState('');
    const [victim_address, setVictim_Address] = useState('');
    const[injuries, setInjuries] = useState('');
    const[description, setDescription] = useState('');
        
    
  
        const handleAddClick = async (e) => {
            e.preventDefault();
           
        try {
          const response = await fetch("https://simonpradhan.pythonanywhere.com/accident/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                city: city,
                district: district,
                date: date,
                time: time,
                fault_vehicle_number: fault_vehicle_number,
                fault_driver_name: fault_driver_name,
                fault_driver_email: fault_driver_email,
                fault_driver_phone: fault_driver_phone,
                fault_driver_address: fault_driver_address,
                victim_vehicle_number: victim_vehicle_number,
                victim_name: victim_name,
                victim_email: victim_email,
                victim_phone: victim_phone,
                victim_address: victim_address,
                injuries: injuries,
                description: description
            }),
            });
                const data = await response.json();
                if (data['success'] === true) {
                    window.location.reload();
                }
                else {
                    alert("Invalid Credentials");
                }

                } catch (error) {
                console.log(error);
                
                }
            };
            

 

                useEffect(() => {
                    const fetchAccidentData= async () => {
                    try {
                        const response = await fetch("https://simonpradhan.pythonanywhere.com/accidents/");
                        const data = await response.json();
                        setAccidentData(data);
                        console.log(data);
                    } catch (error) {
                        console.log(error);
                    
                    }
                    };
                    fetchAccidentData();
                }, []);
                    
    return (
        <>

        <Navbar/>
        <div className='officer-heading'>
            <h2 className='text'>ADD OR REMOVE ACCIDENT DETAILS </h2>
            </div>
            <div className='accidentbody'>

                <form className='accidentform'>
                    <div className="form-section">
                        <div className="form-sectionlocation">


                            <input type="text" id="city" placeholder="City" name="city" required  value={city} onChange={(e) => setCity(e.target.value)} />
                            <input type="text" id="district" name="district" placeholder="District" required value={district} onChange={(e) => setDistrict(e.target.value)}/>
                            <input type="date" id="date" name="date" placeholder="Date" required value={date} onChange={(e) => setDate(e.target.value)}/>
                            <label className='violationlabel' htmlFor="vehicle">Time:</label>
                            <input type="time" id="time" name="time" placeholder="Time" required value={time} onChange={(e) => setTime(e.target.value)} />
                        </div>

                    </div>
                    <div className='accidentuser'>




                        <div className="form-sectionfalut">
                            <div className='falutdriverheading'>

                                <h3 className='accidenth3'>AT-FAULT DRIVER DETAILS</h3>
                                <br />
                            </div>
                            <div className='falutdriverinputcontainer'>

                                <input type="text" id="falutvehicleNumber" name="falutvehicleNumber" placeholder="Vehicle Number" required   value={fault_vehicle_number} onChange={(e) => setFault_Driver_Vehicle_Number(e.target.value)}/>

                                <input type="text" id="falutName" name="falutName" placeholder="Name " required  value={fault_driver_name} onChange={(e) => setFault_Driver_Name(e.target.value)} />
                                <input type="email" id="falutEmail" name="falutEmail" placeholder="Email" required  value={fault_driver_email} onChange={(e) => setFault_Driver_Email(e.target.value)}/>

                                <input type="tel" id="falutPhone" name="falutPhone" placeholder='Contact Number'  required  value={fault_driver_phone} onChange={(e) => setFault_Driver_Phone(e.target.value)}/>
                                <input type="text" id="falutAddress" name="falutAddress" placeholder="Address" required  value={fault_driver_address} onChange={(e) => setFault_Driver_Address(e.target.value)}></input>
                            </div>
                        </div>


                        <div className="form-sectionvictim">
                            <div className='victimheading'>
                                <h3 className='accidenth3' >VICTIM DETAILS</h3>
                            </div>
                            <br />
                            <div className='victiminputcontainer'>

                                <input type="text" id="victimvehicleNumber" name="victimvehicleNumber" placeholder="Vehicle Number" required  value={victim_vehicle_number} onChange={(e) => setVictim_Vehicle_Number(e.target.value)}/>

                                <input type="text" id="victimName" name="victimName" placeholder="Name " required  value={victim_name} onChange={(e) => setVictim_Name(e.target.value)}/>
                                <input type="email" id="victimEmail" name="victimEmail" placeholder="Email" required  value={victim_email} onChange={(e) => setVictim_Email(e.target.value)} />

                                <input type="tel" id="victimPhone" name="victimPhone" placeholder='Contact Number'  required  value={victim_phone} onChange={(e) => setVictim_Phone(e.target.value)} />
                                <input type="text" id="victimAddress" name="victimAddress" placeholder="Address" required  value={victim_address} onChange={(e) => setVictim_Address(e.target.value)}></input>
                            </div>


                        </div>

                    </div>
                    <div className="form-section">
                        <input type="number" id="injuries" name="injuries" placeholder='Number of Injuries' required  value={injuries} onChange={(e) => setInjuries(e.target.value)}/>

                    </div>
                    <div className="form-section">
                        <textarea id="description" name="description" rows="5" placeholder="Description" required  value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>

                    <div className='accidentsavebtn'>
                        <button className="savebtn" onClick={handleAddClick}>ADD</button>
                    </div>

                </form>


                <div className='accident-table'>

                    <table>
                        <thead>
                            <tr>
                               
                                <th>City</th>
                                <th>District</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Fault_Driver_Vehicle_Number</th>
                                <th>Fault_Driver_Name</th>
                                <th>Fault_Driver_Email</th>
                                <th>Fault_Driver_Phone</th>
                                <th>Fault_Driver_Address</th>
                                <th>victim_vehicle_number </th>
                                <th>Victim_Name</th>
                                <th>Victim_Email</th>
                                <th>Victim_Phone</th>
                                <th>Victim_Address</th>
                                <th>Injuries</th>
                                <th>Description</th>
                              
                            </tr>
                        </thead>
                        <tbody>
  
                        {AccidentData &&
                            AccidentData.map((accident) => (
                            <tr >
                                <td>{accident.city}</td>
                                <td>{accident.district}</td>
                                <td>{accident.date}</td>
                                <td>{accident.time}</td>
                                <td>{accident.fault_vehicle_number}</td>
                                <td>{accident.fault_driver_name}</td>
                                <td>{accident.fault_driver_email}</td>
                                <td>{accident.fault_driver_phone}</td>
                                <td>{accident.fault_driver_address}</td>
                                <td>{accident.fault_driver_number}</td>
                                <td>{accident.victim_vehicle_number}</td>
                                <td>{accident.victim_name}</td>
                                <td>{accident.victim_email}</td>
                                <td>{accident.victim_phone}</td>
                                <td>{accident.victim_address}</td>
                                <td>{accident.injuries}</td>
                                <td>{accident.description}</td>
                                
                            </tr>
                            ))}


                           
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )
}
