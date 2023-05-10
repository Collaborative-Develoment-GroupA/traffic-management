import {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Accident Chart',
      },
    },
  };

const Horizontalchart =() => {
    const [data, setData] = useState({
        labels:['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [
          {
            label: 'da',
            data:[],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(25, 90, 13, 0.5)',
          },
          {
            label: 'Dataset 2',
            data:[],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      });
    useEffect(()=> {
       const fetchData= async()=> {
           const url = 'https://simonpradhan.pythonanywhere.com/accidents/'
           const labelSet = []
           const date = [];
           const injuries = [];
         await fetch(url).then((data)=> {
             console.log("Api data", data)
             const res = data.json();
             console.log(data);
             return res
         }).then((res) => {
             console.log("ressss", res)
            for (const val of res) {
                date.push(val.date);
                injuries.push(val.injuries)
                
            }
            setData({
                labels:['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                datasets: [
                  {
                    label: 'date',
                    data:date,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(99, 132, 0.5)',
                  },
                  {
                    label: 'injuries',
                    data:injuries,
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 235, 0.5)',
                  },
                ],
              })
            console.log("arrData", date, injuries)
         }).catch(e => {
                console.log("error", e)
            })
        }
        
        fetchData();
    },[])
   
    return(
        <div style={{width:'100%', height:'100%'}}>
            {
                console.log("dataaaaaaaa", data)
            }
            <Bar data={data} options={options}/>
         </div>)
}
export default Horizontalchart;



