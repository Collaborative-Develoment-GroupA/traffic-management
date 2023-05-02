import React, { useState, useEffect } from 'react';
import {Chart} from 'chart.js';
import Navbar from './Navbar';
import '../styles/css/home.css';

export const Home = () => {
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    const fetchChartData = async () => {
      const res = await fetch('https://example.com/api/accidents');
      const data = await res.json();
      setChartData(data);
    };
    fetchChartData();
  }, []);

  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');
     // Destroy any existing chart instance
    let myChart = Chart.getChart('myChart');
    if (myChart) {
        myChart.destroy();
    }
    new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: {
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: '#fff'
            },
            gridLines: {
              display: true,
              color: 'rgba(255,255,255,0.1)'
            },
            scaleLabel: {
              display: true,
              labelString: 'Number of Accidents',
              fontColor: '#fff'
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: '#fff'
            },
            gridLines: {
              display: true,
              color: 'rgba(255,255,255,0.1)'
            }
          }]
        },
        legend: {
          labels: {
            fontColor: '#fff'
          }
        }
      }
    });
  }, 
  [chartData]);



    return (
      
        <>
        <Navbar/>
       
        <div className='home-container'>
        
         </div>
        <div className='homebody'>
        
        <div className="stats">
    
                    <div className="stat">
                    <h3>Total Violations</h3>
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
            <div className="dashboard">
                <canvas id="myChart"></canvas>
              

            </div>

            </div>
            <div className="news-container">
                <div className="paragraph">
                    <p>News and Notices</p>
                </div>
                <div className='notice'>
                    <select id="type" name="type">
                    <option value="a">Officers updated post and positions</option>
                    <option value="b">New post vacancy announcement</option>
                    <option value="c">Ticket violations rules</option>
                    </select>
                </div>
            </div>
        </div>
</>
);
}
            