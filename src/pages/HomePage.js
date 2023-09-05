import React, { useEffect, useState } from 'react'
import Chart from '../components/Chart'
import axios from 'axios';

export const HomePage = () => {
  const [data, setData] = useState([])

  const getData =async ()=>{
    try {
      const res = await axios.get("https://fakestoreapi.com/products")
      setData(res.data)
    } catch (error) {
      console.log(error,"error")
    }
  }
  
  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
      <Chart ChartData = {data} dataKeyName = {"id"} dataKeyLine = {"price"}/>
    </div>
  )
}
