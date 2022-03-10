import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2'

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  export const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  const labels = ['CRUMBS', 'GLAZED AND CONFUSED', 'MISS MUFFETS MUFFINS', 'I GOT CAKE', 'BABA\'S PEROGIES', 'KETOLICIOUS', 'BRITISH BANGERS'];

  export const data = {
    labels,
    datasets: [
      {
        label: 'Restaurant Orders / day',
        data: ["10","40","20","50","100","10","25"],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
const AnalyticsTab = () => {
  return (
    <div><Bar data={data} /></div>
  )
}

export default AnalyticsTab