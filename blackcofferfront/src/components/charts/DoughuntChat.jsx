import React, { useMemo, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);


export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Sector',
    },
  },
  
};
export function DoughuntChat() {
  const {data} = useSelector(state => state.data)


  const matching = useMemo(()=> ({
    labels: data?.[0]?.map(item => item._id),
    datasets: [
      {
        label: '# of Votes',
        data: data?.[0]?.map(item => item.count),
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(0, 255, 0, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(128, 128, 0, 1)',
          'rgba(128, 0, 128, 1)',
          'rgba(0, 128, 128, 1)',
          'rgba(255, 165, 0, 1)',
          'rgba(0, 128, 0, 1)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(0, 255, 0, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(128, 128, 0, 1)',
          'rgba(128, 0, 128, 1)',
          'rgba(0, 128, 128, 1)',
          'rgba(255, 165, 0, 1)',
          'rgba(0, 128, 0, 1)'
        ],
        borderWidth: 1,
      },
    ],
  }), [data])

  console.log(matching)
 
  return (
    <div className='w-[400px] h-[400px] border border-[#eee] mt-[10px] ml-[5%] p-2'>
      <Doughnut data={matching}  options={options} />
    </div>
  );
}