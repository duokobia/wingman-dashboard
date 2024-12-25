import React from 'react';
import {
    BarChart,
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

interface DataPoint {
    name: string;
    Consultations: number;
    ClosedOrders: number;
    amt: number;
}

const data: DataPoint[] = [
    { name: 'This week', Consultations: 22, ClosedOrders: 19.25, amt: 24 },
    { name: 'Last week', Consultations: 18.5, ClosedOrders: 17.5, amt: 22 },
];

const PastPeriodBarcharts: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height="89%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 10,
                    left: -30,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false}  />
                <XAxis dataKey="name" stroke="#fffff" tick={{ dy: 12, fill: '#667085'  }} />
                <YAxis domain={[10, 20]} 
                  ticks={[ 10, 12, 14, 16, 18, 20]} stroke="#fffff"
                  tick={{ fill: '#8A94A6' }}  />
                <Tooltip contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #ccc', 
                    borderRadius: 4 
                  }} 
                  itemStyle={{ 
                    color: '#15B79F' 
                  }}  />
                <Legend  wrapperStyle={{ 
                    padding: '0px', 
                    borderRadius: '5px', 
                    backgroundColor: 'rgba(255, 255, 255, 0.2)' 
                  }}
                  iconSize={0} 
                  iconType="circle" 
                  formatter={(value, entry, index) => (
                    <span style={{ color: 'white' }}>{value}</span> 
                  )} />
                <Bar 
                    dataKey="Consultations" 
                    fill="#CCFBEF"  
                    activeBar={<Rectangle fill="#134E48" stroke="purple" />}
                    barSize={36} radius={[5, 5, 0, 0]} 
                />
                <Bar 
                    dataKey="ClosedOrders" 
                    fill="#134E48" 
                    activeBar={<Rectangle fill="#CCFBEF" stroke="blue" />} 
                    barSize={36} radius={[5, 5, 0, 0]}
                />
               
            </BarChart>
        </ResponsiveContainer>
    );
};

export default PastPeriodBarcharts;
