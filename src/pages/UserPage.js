import React, { useEffect, useState } from 'react'
import Chart from '../components/Chart'
import  PieChart  from '../components/PieChart';
import SideMenuBar from '../components/SideMenuBar';
import axios from 'axios';

const UserPage = () => {

   // mock data for piechart
  const [data, setData] = useState([])
  const PieChart2 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    { name: "B1", value: 100 },
    { name: "B2", value: 80 },
    { name: "B3", value: 40 },
    { name: "B4", value: 30 },
    { name: "B5", value: 50 },
    { name: "C1", value: 100 },
    { name: "C2", value: 200 },
    { name: "D1", value: 150 },
    { name: "D2", value: 50 }
  ];
  const PieChart1 = [
    { name: "A1", value: 400 },
    { name: "A2", value: 100 },
    { name: "B1", value: 10 },
    { name: "B2", value: 800 },
    { name: "B3", value: 400 },
    { name: "B4", value: 305 },
    { name: "B5", value: 500 },
    { name: "C1", value: 100 },
    { name: "C2", value: 400 },
    { name: "D1", value: 150 },
    { name: "D2", value: 50 }
  ];

    // mock from api pass to  Chart
  const getData =async ()=>{
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
      setData(res.data)
    } catch (error) {
      console.log(error,"error")
    }
  }
  
  useEffect(()=>{
    getData()
  },[])

  // dataKeyName grap x axis number or text
  // dataKeyLine grap line valu
  return (
    <div className='page'>
      <SideMenuBar/>
      <div className='content'>
        <div className='PieChart'>
          <PieChart PieChartData = {PieChart1}/>
          <PieChart PieChartData = {PieChart2}/>
        </div>
        <Chart ChartData={data} dataKeyName={"id"} dataKeyLine={"userId"} />
      </div>
  </div>
  )
}

export default UserPage

