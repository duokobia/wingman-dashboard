import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface DataPoint {
  name: string;
  value: number;
}

interface BarChartProps {
  data: DataPoint[];
  width?: number | string;
  height?: number | string;
  barColor?: string;
}

const ConsultationsCharts: React.FunctionComponent<BarChartProps> = ({
  data,
  width = '100%',
  height = 60,
  barColor = '#fff3c8'
}) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <BarChart
        data={data}
        margin={{
          top: 15,
          right: 30,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 5" vertical={false}  />
        <XAxis dataKey="name" stroke="#fffff" tick={{ dy: 30, fill: '#667085'  }} />
        <YAxis domain={[10, 60]} 
          ticks={[10, 20, 30, 40, 50, 60] } stroke="#fffff" label={{ 
            value: 'CONSULTATIONS',
            fontSize: '11px',
            fontWeight: '900',
            fill: '#DEE0E1', 
            angle: -90, 
            position: 'insideLeft', 
            dx: 5,
            dy: 45 
          }}
          tick={{ fill: '#8A94A6' }}  />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#fff', 
            border: '1px solid #ccc', 
            borderRadius: 4 
          }} 
          itemStyle={{ 
            color: '#15B79F' 
          }} 
        /> 
        <Legend 
          wrapperStyle={{ 
            padding: '0px', 
            borderRadius: '5px', 
            backgroundColor: 'rgba(255, 255, 255, 0.2)' 
          }}
          iconSize={0} 
          iconType="circle" 
          formatter={(value, entry, index) => (
            <span style={{ color: 'white' }}>{value}</span> 
          )} 
        /> 
        <Bar dataKey="value" fill={barColor} barSize={40} radius={[5, 5, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ConsultationsCharts;