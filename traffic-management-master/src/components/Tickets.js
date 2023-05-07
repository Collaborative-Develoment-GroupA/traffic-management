import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export const Tickets = () => {
  const [ticket_type, setTicketType] = useState("");
  const [vehicle_number, setTicketVehicleNumber] = useState("");
  const [name, setTicketName] = useState("");
  const [email, setTicketEmail] = useState("");
  const [contact_number, setTicketPhone] = useState("");
  const [address, setTicketAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [Tickets, setTickets] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://simonpradhan.pythonanywhere.com/ticket/",
        {
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
        }
      );
      const data = await response.json();
      if (data["success"] === true) {
        return (window.location.href = "/tickets");
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const handleRemove = async (ticketName) => {
  //   try {
  //     const response = await fetch(`https://simonpradhan.pythonanywhere.com/tickets/${ticketName}`, {
  //     method: "DELETE",

  //     });
  //     const data = await response.json();
  //     if (data['success'] === true) {
  //       const updatedTickets = tickets.filter(ticket => ticket.name !== ticketName);
  //       setTickets(updatedTickets);
  //     } else {
  //       alert("Failed to remove ticket");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch( "https://simonpradhan.pythonanywhere.com/tickets/"
        );
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
      <Navbar />
      <div className="voilation-para">
        <h2 className="text">ADD OR REMOVE TICKET DETAILS </h2>
      </div>
      <div className="violationdiv">
        <form className="violation">
          <div className="addform-section">
            <div className="addform-sectionticketinfo">
              <select
                id="type"
                name="type"
                value={ticket_type}
                onChange={(e) => setTicketType(e.target.value)}
              >
                <option value="Speeding Ticket">Speeding Ticket</option>
                <option value="Red Light Violation">Red Light Violation</option>
                <option value="Parking Violation">Parking Violation</option>
              </select>

              <input
                type="text"
                id="ticketvehicleNumber"
                name="ticketvehicleNumber"
                placeholder="Vehicle Number"
                required
                value={vehicle_number}
                onChange={(e) => setTicketVehicleNumber(e.target.value)}
              />

              <input
                type="text"
                id="ticketName"
                name="ticketName"
                placeholder="Name "
                required
                value={name}
                onChange={(e) => setTicketName(e.target.value)}
              />
              <input
                type="text"
                id="ticketEmail"
                name="ticketEmail"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setTicketEmail(e.target.value)}
              />

              <input
                type="text"
                id="ticketPhone"
                name="ticketPhone"
                placeholder="Contact Number"
                required
                value={contact_number}
                onChange={(e) => setTicketPhone(e.target.value)}
              />
              <input
                type="text"
                id="ticketAddress"
                name="ticketAddress"
                placeholder="Address"
                required
                value={address}
                onChange={(e) => setTicketAddress(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="form-section">
            <div className="addform-sectionticketlocation">
              <input
                type="text"
                id="city"
                placeholder="City"
                name="city"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />

              <input
                type="text"
                id="district"
                name="district"
                placeholder="District"
                required
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
              <input
                type="date"
                id="date"
                name="date"
                placeholder="Date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <label htmlFor="vehicle">Time:</label>
              <div classname="input">
                <input
                  type="time"
                  id="time"
                  name="time"
                  placeholder="Time"
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="addsavebtnticket">
            <button className="savebutton" onClick={handleSubmit}>
              SAVE
            </button>
            <br />
            <button className="removebutton">REMOVE</button>
          </div>
        </form>
        <div className="ticket-table">
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
              {Tickets &&
                Tickets.map((ticket) => (
                  <tr key={ticket.ticket_type}>
                    <td>{ticket.ticket_type}</td>
                    <td>{ticket.vehicle_number}</td>
                    <td>{ticket.name}</td>
                    <td>{ticket.email}</td>
                    <td>{ticket.contact_number}</td>
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
};
