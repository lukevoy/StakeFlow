import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './YieldChart.css';

const YieldChart = () => {
  // Mock data for demonstration
  const data = [
    { date: '2024-01', ETH: 4.2, SUI: 5.8, APT: 5.5 },
    { date: '2024-02', ETH: 4.3, SUI: 6.0, APT: 5.6 },
    { date: '2024-03', ETH: 4.5, SUI: 6.2, APT: 5.8 },
    { date: '2024-04', ETH: 4.4, SUI: 6.1, APT: 5.7 },
    { date: '2024-05', ETH: 4.6, SUI: 6.3, APT: 5.9 },
  ];

  return (
    <div className="yield-chart">
      <h3>Yield Performance</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2a3142" />
          <XAxis dataKey="date" stroke="#8899a6" />
          <YAxis stroke="#8899a6" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1e2530', 
              border: '1px solid #2a3142',
              borderRadius: '8px'
            }} 
          />
          <Legend />
          <Line type="monotone" dataKey="ETH" stroke="#667eea" strokeWidth={2} />
          <Line type="monotone" dataKey="SUI" stroke="#4ade80" strokeWidth={2} />
          <Line type="monotone" dataKey="APT" stroke="#f59e0b" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default YieldChart;

