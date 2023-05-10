import Navbar from "./Navbar";
import "../styles/css/home.css";
import LineGraph from "./LineGraph";
import { useEffect, useState } from "react";

export const Home = () => {
  const [TotalOfficers, setTotalOfficers] = useState([]);
  const [TotalVoilation, setTotalVoilation] = useState([]);
  const [TotalAccident, setTotalAccident] = useState([]);
  // const change = useState();

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchOfficers = async () => {
      try {
        const response = await fetch(
          "https://simonpradhan.pythonanywhere.com/officers/"
        );
        const data = await response.json();
        setTotalOfficers(data.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfficers();
  }, []);
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch(
          "https://simonpradhan.pythonanywhere.com/tickets/"
        );
        const data = await response.json();
        setTotalVoilation(data.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTickets();
  }, []);

  const handleChange = (event) => {
    if (event.target.value === "b") {
      window.location.href = "/officers";
    }
    if (event.target.value === "c") {
      window.location.href = "/accidents";
    }
    if (event.target.value === "d") {
      window.location.href = "/tickets";
    }
  };

  useEffect(() => {
    const fetchAccidentData = async () => {
      try {
        const response = await fetch(
          "https://simonpradhan.pythonanywhere.com/accidents/"
        );
        const data = await response.json();
        setTotalAccident(data.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAccidentData();
  }, []);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=8d2da81ad6e9484baba2a72febd30f54"
        );
        const data = await response.json();
        setNewsData(data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNewsData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="home-container"></div>
      <div className="homebody">
        <div className="stats">
          <div className="stat">
            <h3>Total Officers</h3>
            <p>{TotalOfficers}</p>
          </div>
          <div className="stat">
            <h3>Total Violations</h3>
            <p>{TotalVoilation}</p>
          </div>
          <div className="stat">
            <h3>Total Accidents</h3>
            <p>{TotalAccident}</p>
          </div>
          <div className="dashboard">
            <LineGraph />
          </div>
        </div>

        <div className="news-container">
          <div className="paragraph">
            <p>News and Notices</p>
          </div>
          <div className="notice">
            <select id="type" name="type" onChange={handleChange}>
              <option value="a">Latest News</option>
              <option value="b">Officers updated post and positions</option>
              <option value="c">Accidents Details Of the Month</option>
              <option value="d">Ticket Informations Of the Month.</option>
            </select>
          </div>
          <div className="news">
          <div className="paragraph">
          <p>Top Headlines</p>
          </div>
            
            <ul>
              {newsData.map((article, index) => (
                <li key={index}>
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
