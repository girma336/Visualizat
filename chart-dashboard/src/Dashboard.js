import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJs } from 'chart.js/auto'
// import data from './data.json';
import {data} from './data';

const Dashboard = () => {
  const [chartData, setChartData] = useState({
    labels: data.map(item => item.year),
      datasets: [
        {
          label: 'Revenue',
          data: data.map(item => item.revenue),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        },
        {
          label: 'Expenses',
          data: data.map(item => item.expenses),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }
      ]
  });
  console.log(data);
//   useEffect(() => {
//     // Process the data from the JSON file
//     const years = data.map(item => item.year);
//     const revenueData = data.map(item => item.revenue);
//     const expensesData = data.map(item => item.expenses);

//     // Set up the chart data
//     setChartData({
      
//     });
//   }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <Bar data={chartData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default Dashboard;