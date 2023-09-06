import React from 'react'
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    AreaChart,
    Area,
    ResponsiveContainer,
  } from 'recharts';


const Chart = ({ChartData, dataKeyName, dataKeyLine}) => {
  return (
    <div className="App">
      <ResponsiveContainer width="95%" height={300}>
          <AreaChart
            width={500}
            height={200}
            data={ChartData}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey = {dataKeyName}/>
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey = {dataKeyLine} stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart