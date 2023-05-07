import { useEffect, useState } from 'react';
import Navbar from './Navbar';

export const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [ticket_type, setTicketType] = useState('');
  const [vehicle_number, setTicketVehicleNumber] = useState('');
  const [name, setTicketName] = useState('');
  const [email, setTicketEmail] = useState('');
  const [contact_number, setTicketPhone] = useState('');
  const [address, setTicketAddress] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://simonpradhan.pythonanywhere.com/tickets/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ticket_type: ticket_type,
          vehicle_number: vehicle_number,
          name: name,
          email: email,
          contact_number: contact_number,
          address: address,
          city: city,
          district: district,
          date: date,
          time: time,
        }),
      });
      const data = await response.json();
      if (data['success'] === true) {
        return window.location.href = "/tickets";
      }
      else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = async (ticketId) => {
    try {
      const response = await fetch(`https://simonpradhan.pythonanywhere.com/tickets/`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data['success'] === true) {
        const updatedTickets = tickets.filter(ticket => ticket.id !== ticketId);
        setTickets(updatedTickets);
      } else {
        alert("Failed to remove ticket");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch("https://simonpradhan.pythonanywhere.com/tickets/");
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTickets();
  }, []);

  
  return (
    <>
    <Navbar/>
    <div className= 'voilation-para'>
    <h2 className='text'>ADD OR REMOVE TICKET DETAILS </h2>
    </div>
      <div className='violationdiv'>

        <form className='violation'>
          <div className="addform-section">
            
            <div className="addform-sectionticketinfo">

              
              <select id="type" name="type">
                <option value="Speeding Ticket">Speeding Ticket</option>
                <option value="Red Light Violation">Red Light Violation</option>
                <option value="Parking Violation">Parking Violation</option>
              </select>
              

              <input type="text" id="ticketvehicleNumber" name="ticketvehicleNumber" placeholder="Vehicle Number" required />

              <input type="text" id="ticketName" name="ticketName" placeholder="Name " required />
              <input type="text" id="ticketEmail" name="ticketEmail" placeholder="Email" required />

              <input type="text" id="ticketPhone" name="ticketPhone" placeholder='Contact Number' required />
              <input type="text" id="ticketAddress" name="ticketAddress" placeholder="Address" required></input>
            </div>
          </div>
          <div className="form-section">


            <div className="addform-sectionticketlocation">
              

              <input type="text" id="city" placeholder="City" name="city" required />


              <input type="text" id="district" name="district" placeholder="District" required />
              <input type="date" id="date" name="date" placeholder="Date" required />
              <label htmlFor="vehicle">Time:</label>
              <div classname="input">
              <input type="time" id="time" name="time" placeholder="Time" required /> 
              </div> 
              
            </div>
          </div>





          <div className='addsavebtnticket'>

            <button className="savebutton" onClick={handleSubmit}>SAVE</button>
            <br />
            <button className="removebutton"onClick={handleRemove}>REMOVE</button>
          </div>
        </form>
        <div className='ticket-table'>
          <table>
            <thead>
              <tr>
                <th>Ticket Type</th>
                <th>Vehicle Number</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Address</th>
                <th>City</th>
                <th>District</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>





  {tickets.map((ticket, id) => (
    <tr key={ticket.id}>
      <td>{ticket.ticket_type}</td>
      <td>{ticket.vehicle_number}</td>
      <td>{ticket.name}</td>
      <td>{ticket.email}</td>
      <td>{ticket.contact}</td>
      <td>{ticket.address}</td>
      <td>{ticket.city}</td>
      <td>{ticket.district}</td>
      <td>{ticket.date}</td>
      <td>{ticket.time}</td>
    </tr>
  ))}
</tbody>
              
          </table>
        </div>
      </div>
    </>
  );
}

