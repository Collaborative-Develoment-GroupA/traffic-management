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
            label: 'Dataset 1',
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
           const url = 'https://simonpradhan.pythonanywhere.com/accident/'
           const labelSet = []
           const dataSet1 = [];
           const dataSet2 = [];
         await fetch(url).then((data)=> {
             console.log("Api data", data)
             const res = data.json();
             console.log(data);
             return res
         }).then((res) => {
             console.log("ressss", res)
            for (const val of res) {
                dataSet1.push(val.vehicle_name);
                dataSet2.push(val.name)
                // labelSet.push(val.name)
            }
            setData({
                labels:['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                datasets: [
                  {
                    label: 'Dataset ID',
                    data:dataSet1,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(99, 132, 0.5)',
                  },
                  {
                    label: 'Dataset ID2',
                    data:dataSet2,
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 235, 0.5)',
                  },
                ],
              })
            console.log("arrData", dataSet1, dataSet2)
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
// import { useEffect, useState } from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// import { Line } from 'react-chartjs-2';
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );
// const options = {
//   indexAxis: 'x',
//   elements: {
//     line: {
//       borderWidth: 2,
//     },
//   },
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'right',
//     },
//     title: {
//       display: true,
//       text: 'Accident Chart',
//     },
//   },
// };

// const LineGraph = () => {
//   const [data, setData] = useState({
//     labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
//     datasets: [
//       {
//         label: 'Dataset 1',
//         data: [],
//         borderColor: 'rgb(255, 99, 132)',
//         backgroundColor: 'rgba(25, 90, 13, 0.5)',
//       },
//       {
//         label: 'Dataset 2',
//         data: [],
//         borderColor: 'rgb(53, 162, 235)',
//         backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       },
//     ],
//   });
//   useEffect(() => {
//     const fetchData = async () => {
//       const url = 'https://simonpradhan.pythonanywhere.com/accident';
//       const labelSet = [];
//       const dataSet1 = [];
//       const dataSet2 = [];
//       await fetch(url)
//         .then((data) => {
//           console.log('Api data', data);
//           return data.json();
//         })
//         .then((res) => {
//           console.log('accident', res);
//           for (const val of res) {
//             dataSet1.push(val.vehicle_name);
//             dataSet2.push(val.name);
//             labelSet.push(val.day);
//           }
//           setData({
//             labels: labelSet,
//             datasets: [
//               {
//                 label: 'Dataset ID',
//                 data: dataSet1,
//                 borderColor: 'rgb(255, 99, 132)',
//                 backgroundColor: 'rgba(99, 132, 0.5)',
//                 fill: false,
//               },
//               {
//                 label: 'Dataset ID2',
//                 data: dataSet2,
//                 borderColor: 'rgb(53, 162, 235)',
//                 backgroundColor: 'rgba(53, 235, 0.5)',
//                 fill: false,
//               },
//             ],
//           });

//             console.log("arrData", dataSet1, dataSet2)
//          }).catch(e => {
//                 console.log("error", e)
//             })
//         }
        
//         fetchData();
//     },[])
   
//     return(
//         <div style={{width:'100%', height:'100%'}}>
//             {
//                 console.log("data", data)
//             }
//             <Line data={data} options={options}/>
//          </div>)
// }
// export default LineGraph;

