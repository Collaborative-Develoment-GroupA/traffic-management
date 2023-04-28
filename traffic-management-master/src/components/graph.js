import React, { Component } from 'react';
import { Chart } from 'chart.js/auto';


class Graph extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");
    new Chart(myChartRef, {
      type: 'bar',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Rainfall",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  render() {
    return (
      <div>
        <canvas ref={this.chartRef} />
      </div>
    )
  }
}

export default Graph;